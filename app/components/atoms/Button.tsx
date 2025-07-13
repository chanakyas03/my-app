import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a href={href} className="btn btn-primary mt-3">
      {text}
    </a>
  );
};

export default Button;
