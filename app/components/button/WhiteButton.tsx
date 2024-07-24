import React, { FC } from 'react';
import './WhiteButton.scss';
type Props = {
  text: string;
  onClick?: () => void;
};
const WhiteButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="white-button-style" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default WhiteButton;
