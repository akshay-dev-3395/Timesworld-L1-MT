"use client";
import React from "react";
import InputComponent from "../CommonComponent/InputComponent";
import ButtonComponent from "../CommonComponent/ButtonComponent";
import SocialMediaSection from "./SocialMediaSection";
import { FormikProps } from "formik";
import { InitialValueType } from "@/types/loginType";

type Props = {
  formik: FormikProps<InitialValueType>;
};

const LoginForm = (props: Props) => {
  const { formik } = props;
  return (
    <div className="w-3/4">
      <h2 className="text-4xl text-slate-900">Sign In</h2>
      <p className="text-slate-900 text-lg mb-4">
        New user?{" "}
        <span className="cursor-pointer text-blue-600"> Create an account</span>
      </p>
      <InputComponent
        name="user_name"
        placeholder="Username or email"
        onChangeText={formik.handleChange}
        value={formik.values.user_name}
        onBlur={formik.handleBlur}
        error={formik.errors.user_name}
      />
      <InputComponent
        name="password"
        placeholder="Password"
        type="password"
        onChangeText={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
      />
      <div className="flex-row flex items-center gap-2 my-4">
        <InputComponent
          name="check"
          placeholder=""
          type="checkbox"
          inputStyle="h-6 w-6"
          onChangeText={formik.handleChange}
          value={"yes"}
          checked={formik.values.check}
        />
        <p className="text-slate-900 text-lg m-0 p-0">Keep me signed in</p>
      </div>
      <ButtonComponent label="Sign In" onPress={() => formik.handleSubmit()} />

      <div className="flex flex-row items-center my-5">
        <div className="flex-1 h-1 bg-slate-600" />
        <p className="text-slate-900 text-lg px-3 m-0 ">Or Sign In With</p>
        <div className="flex-1 h-1 bg-slate-600" />
      </div>
      <SocialMediaSection />
    </div>
  );
};

export default LoginForm;
