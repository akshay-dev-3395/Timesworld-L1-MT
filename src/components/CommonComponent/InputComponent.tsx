"use client";
import { cn } from "@/hooks/utils";
import React from "react";

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  containerStyle?: string;
  inputStyle?: string;
  name: string;
  type?: string;
};

const InputComponent = (props: Props) => {
  const {
    placeholder,
    onChangeText,
    containerStyle,
    inputStyle,
    name,
    type = "text",
  } = props;
  return (
    <div className={cn(`my-2`, containerStyle)}>
      <input
        placeholder={placeholder}
        name={name}
        className={cn(
          `w-full h-14 border-2 border-gray-200 rounded px-2`,
          inputStyle
        )}
        onChange={(event) => onChangeText(event.target.value)}
        type={type}
      />
    </div>
  );
};

export default InputComponent;
