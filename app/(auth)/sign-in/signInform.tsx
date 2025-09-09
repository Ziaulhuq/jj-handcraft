"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInDefaulValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInwithCredentials } from "@/lib/actions/user.action";

const SignInForm = () => {
  const [data, action] = useActionState(signInwithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        className="text-center w-full"
        disabled={pending}
        variant="default"
      >
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <div>
      <form action={action}>
        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="outline-0 "
              defaultValue={signInDefaulValues.email}
            />
          </div>
          <div>
            <Label htmlFor="Password" className="mb-2">
              Password
            </Label>
            <Input
              id="password"
              type="Password"
              name="Password"
              required
              className="outline-0"
              autoComplete="Password"
              defaultValue={signInDefaulValues.password}
            />
          </div>

          <div>
            <SignInButton />
          </div>

          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}

          <div className="text-center font-medium text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" target="_self">
              <b>Sign up</b>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
