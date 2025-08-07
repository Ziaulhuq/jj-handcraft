import React from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center font-bold">
      <div className="flex gap-3">
        <span>
          <Link href="/">
            <MoveLeft />
          </Link>
        </span>
        <span>
          <Link href="/">Back</Link>
        </span>
      </div>
      <p>page not found</p>
    </div>
  );
};

export default NotFound;
