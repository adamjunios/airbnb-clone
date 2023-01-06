import React from "react";
import Image from "next/legacy/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 xl:sticky">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            // width={100}
            // height={90}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* center */}
        <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm">
          <input
            type="text"
            className="pl-5 bg-transparent flex-grow outline-none text-gray-600 placeholder-gray-400 text-sm"
            placeholder="Start your search"
          />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2" />
        </div>
        {/* right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <Bars3Icon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;