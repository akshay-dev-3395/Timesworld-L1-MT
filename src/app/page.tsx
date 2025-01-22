import LoginForm from "@/components/LoginScreenComponent/LoginForm";
import React from "react";

const LoginScreen = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="h-[70%] w-[60%] bg-blue-400">
          <img
            src="/images/login.png"
            alt="login image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
