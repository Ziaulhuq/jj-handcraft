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
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader className="flex justify-center items-center flex-col">
          <Link href={"/"}>
            <Image
              src="/JJ_logo2.png"
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center font-semibold">
            Create your account
          </CardTitle>
          <CardDescription>
            Enter your information below to sign up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
