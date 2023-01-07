import React from "react";
// import Image from "next/legacy/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
// import Map from "../components/Map";
import MapSearch from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();

  //ES6 Destructuring
  const { location, numberGuests } = router.query;

  // const formatedStartDate = parseISO(startDate);
  // const formatedEndDate = parseISO(endDate);
  // const rangeDate = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* <Header
          placeholder={`${location} | ${rangeDate} | ${numberGuests} ${
            numberGuests > 1 ? "guests" : "guest"
          }`}
        /> */}
        <Header />
        <main className="max-w-screen mt-10 sm:px-16 px-8  flex justify-between space-x-3 ">
          <section className="flex-grow">
            {/* <p>
              300+ Stays {rangeDate} for {numberGuests}{" "}
              {numberGuests > 1 ? "guests" : "guest"}
            </p> */}
            <p>
              300+ Stays for {numberGuests}{" "}
              {numberGuests > 1 ? "guests" : "guest"}
            </p>
            <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="button">Cancelletion Facility</p>
              <p className="button">Type of House</p>
              <p className="button">Price</p>
              <p className="button">Location</p>
            </div>
            <div className="flex flex-col">
              {searchResults.map(
                ({ img, location, title, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
          </section>
          <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <MapSearch searchResults={searchResults} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}

// mapbox://styles/adamjunios/clclz4run000a14pi2ttss85c
// pk.eyJ1IjoiYWRhbWp1bmlvcyIsImEiOiJjbGNseWx0emQxbXU4M29wOHBsY216eXJqIn0.oHhxsrYpzsf24aSaSjJsGw
