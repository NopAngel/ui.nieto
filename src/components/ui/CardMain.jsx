import React from "react";
import LinkIcon from "../../assets/LinkIcon.svg";

function CardMain({ TitleElements, ButtonElement, HrefElement }) {
  return (
    <article className="w-[250px] border-[1px] border-gray-900 bg-gray-950/60 rounded-lg p-[6px] mb-[20px] cursor-pointer">
      <a
        href={HrefElement}
        className="flex justify-evenly opacity-50 items-center"
      >
        <h1 className="text-[15px]">{TitleElements}</h1>
        <img src={LinkIcon} alt="" />
      </a>
      <div className="p-[10px] flex justify-center items-center h-[200px] mt-[40px] mb-[40px]">
        {ButtonElement}
      </div>
    </article>
  );
}

export default CardMain;
