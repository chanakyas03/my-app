import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="form-control"
    />
  );
}
