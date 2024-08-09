'use client'
import { FC } from 'react';

interface InputProps {
  type: string;
  value: string | number;
  change: any;
  article?: string;
  placeholder?: string;
}

const CustomInput: FC<InputProps> = ({ type, change, value, article, placeholder }) => {
  return (
    <div style={{fontSize:'17px'}}>
      <span>{article}</span>
      <input
        className="themeInput"
        type={type}
        value={value}
        onChange={change}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
