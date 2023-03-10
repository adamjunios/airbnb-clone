import React from "react";
import Image from "next/legacy/image";

function Banner() {
  return (
    <>
      <div className="relative h- h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg font-semibold">
            Not sure where to go? Perfect.
          </p>
          <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md cursor-pointer font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150">
            {" "}
            I&apos;m flexible
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
