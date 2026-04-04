import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section>
        <Card className="w-[450px]">
            <CardContent>
                <div className="flex items-center justify-center">
                    <Image src="https://i.ibb.co.com/27jzrDyw/logo.png" alt='Logo' width={100} height={100}/>
                </div>
                <div className="space-y-2 text-center">
                    <h1 className="text-xl font-semibold mt-5">Login Into Account</h1>
                    <p className="text-[14px]">Login into your account by filling out the form below.</p>
                </div>
            </CardContent>
        </Card>
    </section>
  )
}

export default LoginPage;