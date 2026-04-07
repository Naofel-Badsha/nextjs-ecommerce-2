import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { zodSchema } from "@/lib/zodSchema";
import { SignJWT } from "jose";
import UserModal from "../../../../../models/User.model";
import { sendMail } from "@/lib/sendMail";
import { emailVerificationLink } from "../../../../../email/emailVerificationLink";

export async function POST(request: Request) {
  try {
    await connectDB();
    const validationScema = zodSchema.pick({
      email: true,
      password: true,
      username: true,
    });
    const paylod = await request.json();
    const validateData = validationScema.safeParse(paylod);
    if (!validateData.success) {
      return response(
        false,
        401,
        "Invalid or missing input fields",
        validateData.error,
      );
    }
    const { email, password, username } = validateData.data;

    //--------Cheak already registered user-------
    const cheakUser = await UserModal.exists({ email });
    if (cheakUser) {
      return response(true, 409, "User already registered");
    }

    //---------new resgidtion user----------
    const NewRegistation = new UserModal({
      email,
      password,
      username,
    });
    await NewRegistation.save();
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY!);
    const token = await new SignJWT({ userId: NewRegistation._id })
      .setIssuedAt()
      .setExpirationTime("2h")
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);

    await sendMail(
      "Email verification request form Developer Badshah",
      email,
      emailVerificationLink(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify-email?token=${token}`,
      ),
    );
    return response(true, 200, "User registered successfully, please verify your email");
  
} catch (error) {
    catchError(error, "Failed to register user");
  }
}
