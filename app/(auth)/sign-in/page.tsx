import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import SignInForm from "./signInform";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader className="flex justify-center items-center flex-col">
          <Link href={"/"}>
            <Image
              src="/jj-logo.png"
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center font-semibold">Sign In</CardTitle>
          <CardDescription>sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
