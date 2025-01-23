"use client";

import { cn } from "@/hooks/utils";
import React from "react";
import Button from "react-bootstrap/Button";

type Props = {
  label: string;
  onPress: () => void;
  containerStyle?: string;
  buttonStyle?: string;
  variant?: string;
};

const ButtonComponent = (props: Props) => {
  const {
    label,
    onPress,
    containerStyle,
    buttonStyle,
    variant = "primary",
  } = props;
  return (
    <div className={cn(containerStyle)}>
      <Button
        variant={variant}
        className={cn(`w-full h-14 rounded`, buttonStyle)}
        onClick={onPress}
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
