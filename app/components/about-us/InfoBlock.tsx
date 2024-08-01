// components/InfoBlock.tsx

import React from "react";
import "./InfoBlock.scss";

type Props = {
  id: string;
  fake?: boolean;
  numberInfo?: string;
  text?: string;
  isVisible: boolean;
};

const InfoBlock: React.FC<Props> = ({
  id,
  numberInfo,
  text,
  fake,
  isVisible,
}) => {
  return (
    <div
      className="wrapper-block"
      id={id}
      style={
        fake
          ? { display: "none" }
          : { ...(isVisible && { animationPlayState: "running" }) }
      }
    >
      <div className="block-item">
        <p>{text}</p>
        <div className="center-span">
          <span>{numberInfo}</span>
        </div>
      </div>
    </div>
  );
};
export default InfoBlock;
