"use client";

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
    <div className={`${containerStyle}`}>
      <Button
        variant={variant}
        className={`${buttonStyle} w-full h-14 rounded`}
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
