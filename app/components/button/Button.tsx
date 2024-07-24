'use client'
import React from 'react';
import './Button.scss';
type Props = {
  text: string | number;
  onClick?: () => void;
  onConfirm?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};
const Button = ({ text, onClick, type, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="button_style"
      type={type ? type : 'button'}>
      {text}
    </button>
  );
};

export default Button;
