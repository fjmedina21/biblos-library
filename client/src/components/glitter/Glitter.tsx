import React from "react";

interface Props {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

const Glitter: React.FC<Props> = ({ top, right, left, bottom }) => {
  return (
    <div className={`absolute h-[4rem] w-[4rem] bg-amber-300  bottom-${bottom} left-${left} top-${top} right-${right}`}>
      <div className="circle absolute top-0 left-0 h-10 w-10 rounded-br-full bg-white"></div>

      <div className="circle absolute top-0 right-0 h-10 w-10 rounded-bl-full bg-white"></div>

      <div className="circle absolute bottom-0 right-0 h-10 w-10 rounded-tl-full bg-white"></div>
      <div className="circle absolute bottom-0 left-0 h-10 w-10 rounded-tr-full bg-white"></div>
    </div>
  );
};

export default Glitter;
