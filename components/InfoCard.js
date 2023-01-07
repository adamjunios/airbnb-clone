import React from "react";
import Image from "next/legacy/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <>
      <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 transition duration-200 ease-out hover:shadow-lg pr-4 first:border-t">
        {/* left */}
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt={img}
            className="rounded-lg"
          />
        </div>
        {/* right */}
        <div className="flex flex-grow pl-5 flex-col">
          <div className="flex">
            <p>{location}</p>
            <HeartIcon className="h-7 pl-5 cursor-pointer" />
          </div>

          <h4 className="font-semibold">{title}</h4>
          <div className="borde-b w-10 pt-2" />
          <p className="pt-2 text-xs text-gray-500 flex-grow">{description}</p>

          <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400 cursor-pointer" /> {star}
            </p>
            <div className="flex flex-col justify-end">
              <p className="text-lg font-semibold lg:text-xl pb-2">{price}</p>
              <p className="text-right text font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
