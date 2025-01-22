import LoginForm from "@/components/LoginScreenComponent/LoginForm";
import Image from "next/image";
import React from "react";

const LoginScreen = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <img src="/login.png" alt="login image" className="h-3/5" />
      </div>
    </div>
  );
};

export default LoginScreen;
