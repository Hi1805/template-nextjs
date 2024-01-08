import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = (props: InputProps) => {
  return <input {...props}></input>;
};

export default Input;
