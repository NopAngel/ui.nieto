import React from "react";

function CardAnim({ Text }) {
  return (
    <article className="w-[250px] h-[200px] bg-gradient-to-t from-indigo-900 to-purple-700 border-[1px] border-gray-900 rounded-lg flex justify-center">
      <div className="bg-gray-950 w-[98%] h-[98%] rounded-lg mt-[2px]">
        <div className="flex justify-center items-center h-[150px]">
          <p>¡Mi Card!</p>
        </div>
      </div>
    </article>
  );
}

export default CardAnim;
