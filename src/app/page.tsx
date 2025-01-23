"use client";

import LoginForm from "@/components/LoginScreenComponent/LoginForm";
import React from "react";
import useAuthHook from "./useAuthHook";
import { motion } from "framer-motion";

const LoginScreen = () => {
  const [formik] = useAuthHook();
  return (
    <div className="flex flex-row h-screen">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center"
      >
        <LoginForm formik={formik} />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 150 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 justify-center items-center"
      >
        <div className="h-[70%] w-[60%] bg-blue-400">
          <img
            src="/images/login.png"
            alt="login image"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginScreen;
