import React from "react";
import "../index.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, ...rest } = props;
  const onClick = () =>
    React.useCallback(() => {
      console.log("Button clicked");
    }, []);
  return (
    <>
      <button
        className="py-2 px-4 w-full rounded bg-primary text-content-primary text-body"
        onClick={onClick}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
