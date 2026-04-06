import { connectDB } from "@/lib/databaseConnection";
import { response } from "@/lib/helperFunction";
import { zodSchema } from "@/lib/zodSchema";
import { SignJWT} from "jose";
import UserModal from "../../../../../models/User.model";

export async function POST(request: Request) {
    try {
        await connectDB();
        const validationScema = zodSchema.pick({ 
            email: true, password: true, username: true 
        });
        const paylod = await request.json();
        const validateData = validationScema.safeParse(paylod);
        if (!validateData.success) {
            return response(false, 401, "Invalid or missing input fields", 
               validateData.error);
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
            username
        });
        await NewRegistation.save();
        const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY!);
        const token = await new SignJWT({userId: NewRegistation._id})
        .setIssuedAt()
        .setExpirationTime("2h")
        .setProtectedHeader({ alg: "HS256"})
        .sign(secret);   

        return response(true, 201, "User registered successfully", { user: NewRegistation });


    } catch (error) {
        console.error("Error connecting to database:", error);
        return response(false, 500, "Internal Server Error");
    }
}