import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in" className="flex gap-2">
          <UserIcon />
          <span>sign In</span>
        </Link>
      </Button>
    );
  }

  return <div>User</div>;
};

export default UserButton;
