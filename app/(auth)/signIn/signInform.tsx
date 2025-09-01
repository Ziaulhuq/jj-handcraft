"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignInForm = () => {
  return (
    <div>
      <form>
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
              className="outline-0"
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
              autoComplete="Password"
            />
          </div>
          <div>
            <Button className="w-full" variant="default">
              SignIn
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
