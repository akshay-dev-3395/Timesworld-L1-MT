import { useRouter } from "next/navigation";
import React from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { InitialValueType } from "@/types/loginType";

const useAuthHook = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
      .test(
        "is-valid-username-or-email",
        "Must be a valid username or email",
        (value) => {
          if (!value) return false;
          const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return usernameRegex.test(value) || emailRegex.test(value);
        }
      )
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol")
      .required("Password is Required"),
  });

  const initialValues: InitialValueType = {
    user_name: "",
    password: "",
    check: false,
  };

  const formik: FormikProps<InitialValueType> = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   console.log("VALUE===", values);
      router.push("/home");
    },
  });

  //   console.log("FORMIK====", formik.errors);

  return [formik];
};

export default useAuthHook;
