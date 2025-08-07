import React from "react";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <Loader className="animate-spin w-16 h-16 text-blue-500" />
      </div>
      <div>loading...</div>
    </div>
  );
};

export default loading;
