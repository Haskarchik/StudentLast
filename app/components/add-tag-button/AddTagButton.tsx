'use client'
import Image from "next/image";
import "./AddTagButton.scss";

export interface AddTagButtonProps {
  onClick: () => void;
}
export default function AddTagButton({ onClick }: AddTagButtonProps) {
  const hover = "#000";

  function mouseEnter(e: any) {
    e.currentTarget.style.fill = "#F1F0FF";
    e.currentTarget.style.transition = "0.3s";
    
  }
  function mouseLeave(e:any, color:any) {
    e.currentTarget.style.fill = `${colors()}`;
    function colors() {
      if (color) {
        return color;
      } else {
        return hover;
      }
    }
    e.currentTarget.style.transition = "0.3s";
  }
  return (
    <Image
      src="/review-photos/add-icon.svg"
      width={30}
      height={30}
      alt="add"
      onClick={onClick}
      className="button"
      onMouseEnter={(el) => {
        mouseEnter(el);
      }}
      onMouseLeave={(el) => {
        mouseLeave(el, hover);
      }}
    />
  );
}
