"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInDefaulValues } from "@/lib/constants";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";

const SignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

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
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
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
              defaultValue={signInDefaulValues.password}
            />
          </div>

          <div>
            <SignInButton />
          </div>

          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}

          <div className="text-center font-medium text-sm text-muted-foreground">
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
