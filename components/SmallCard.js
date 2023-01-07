import React from "react";
import Image from "next/legacy/image";

function SmallCard({ img, location, distance }) {
  return (
    <>
      <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out">
        {/* left */}
        <div className="relative h-16 w-16">
          <Image
            src={img}
            layout="fill"
            alt={location}
            className="rounded-lg"
          />
        </div>
        {/* right */}
        <div className="flex space-y-1 flex-col">
          <h2 className="font-semibold">{location}</h2>
          <h3 className="text-xs text-gray-500">{distance}</h3>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
