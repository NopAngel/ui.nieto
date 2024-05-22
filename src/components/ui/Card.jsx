import React from "react";

function Card({ Text }) {
  return (
    <article className="w-[250px] h-[200px] bg-gray-950 border-[1px] border-gray-900 rounded-lg">
      <div className="flex justify-center items-center h-[150px]">
        <p>¡Mi Card!</p>
      </div>
    </article>
  );
}

export default Card;
