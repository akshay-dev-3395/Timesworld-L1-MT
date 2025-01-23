"use client";
import { cn } from "@/hooks/utils";
import React, { useMemo } from "react";

type Props = {
  placeholder: string;
  onChangeText: (data: any) => void;
  onBlur?: (data: any) => void;
  containerStyle?: string;
  inputStyle?: string;
  name: string;
  type?: string;
  value: string;
  checked?: boolean;
  error?: string;
};

const InputComponent = (props: Props) => {
  const {
    placeholder,
    onChangeText,
    onBlur,
    containerStyle,
    inputStyle,
    name,
    type = "text",
    value,
    checked,
    error,
  } = props;

  const isError = useMemo(() => {
    if (type === "text" || (type === "password" && error)) {
      return true;
    }
    return false;
  }, [error]);

  return (
    <div className={cn(`my-2`, containerStyle)}>
      <input
        placeholder={placeholder}
        name={name}
        className={cn(
          `w-full h-14 border-2 border-gray-200 rounded px-2`,
          inputStyle
        )}
        onChange={onChangeText}
        onBlur={onBlur}
        type={type}
        value={value}
        checked={checked}
      />
      {isError && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default InputComponent;
