import React from "react";
import Image from "next/legacy/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <>
      <div className="relative cursor-pointer py-16 ">
        <div className="relative h-96 min-w-[300px] ">
          <Image
            src={img}
            layout="fill"
            className="rounded-2xl"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-3xl mb-3 w-64 font-bold">{title}</h3>
          <p>{description}</p>
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default LargeCard;
