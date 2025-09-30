"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUpDefaulValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpWithCredentials } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        className="text-center w-full"
        disabled={pending}
        variant="default"
      >
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };

  return (
    <div>
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="outline-0 "
              defaultValue={signUpDefaulValues.name}
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="text"
              name="email"
              autoComplete="email"
              className="outline-0 "
              defaultValue={signUpDefaulValues.email}
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              required
              className="outline-0"
              autoComplete="password"
              defaultValue={signUpDefaulValues.password}
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="mb-2">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              required
              className="outline-0"
              autoComplete="confirmPassword"
              defaultValue={signUpDefaulValues.confirmPassword}
            />
          </div>

          <div>
            <SignUpButton />
          </div>

          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}

          <div className="text-center font-medium text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" target="_self">
              <b>Sign In</b>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
