import React, { FC } from "react";
import "./InfoBlock.scss";

type Props = {
  fake?: boolean;
  numberInfo?: string;
  text?: string;
};
const InfoBlock: FC<Props> = ({ numberInfo, text, fake }) => {
  return (
    <div className="wrapper-block" style={{ ...(fake && { display: "none" }) }}>
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
