import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const signInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">
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
          <CardTitle className="text-center font-semibold">signIn</CardTitle>
          <CardDescription>sign in to your account</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default signInPage;
