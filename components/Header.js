import React, { useState } from "react";
import Image from "next/legacy/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // main date style file
import "react-date-range/dist/theme/default.css"; // theme date css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelectDate = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    console.log("seraching");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberGuests: numberGuests,
      },
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 xl:sticky">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto "
        >
          <Image
            src="https://links.papareact.com/qd3"
            alt="logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* center */}
        <div className="flex items-center justify-between md:border-2 rounded-full py-2 shadow-sm">
          <input
            type="text"
            className="pl-5 bg-transparent  outline-none text-gray-600 placeholder-gray-400 text-sm sm:text-xs"
            placeholder={placeholder || "Start your search"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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

        {/* search expand */}
        {searchInput && (
          <div className="flex flex-col col-span-3 mt-8 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5861"]}
              onChange={handleSelectDate}
            />
            <div className="flex items-center border-b mb-4 pb-2">
              <h2 className="text-xl pl-2 font-semibold flex-grow">
                {" "}
                Number of Guests
              </h2>
              <UsersIcon className=" h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-500 font-bold"
                value={numberGuests}
                onChange={(e) => setNumberGuests(e.target.value)}
              ></input>
            </div>
            <div className="flex font-medium">
              <button
                className="flex-grow text-gray-500"
                onClick={() => setSearchInput("")}
              >
                Cancel
              </button>
              <button className="flex-grow text-red-500" onClick={search}>
                {" "}
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
