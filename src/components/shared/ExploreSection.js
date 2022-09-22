import React from "react";
import Earth from "../images/earth.svg";
import Energy from "../images/energy.svg";

function ExploreSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-9xl font-extrabold text-terracota mb-20">Explore</h2>
      <div className="flex flex-row w-full justify-between px-28">
        <a className="w-2/5 flex flex-col text-center text-terracota justify-between items-center hover:bg-terracota hover:text-white p-10 transition duration-500 ease-in-out transform hover:scale-105" href="/response-to-nuclear-tech">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl t">Prespectives on Nuclear Technology</h2>
            <h2 className="text-sm font-thin">
              Discover how Nuclear techonolgies is affecting communities the
              world
            </h2>
          </div>
          <div
            style={{ backgroundImage: `url(${Earth})` }}
            className="w-64 h-64 bg-cover"
          />
        </a>
        <a className="w-2/5 flex flex-col text-center items-center justify-between text-bright-green hover:bg-bright-green hover:text-white p-10 transition duration-500 ease-in-out transform hover:scale-105" href="/about-nuclear-tech">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-2xl">
              Learn About Nuclear Reactors and Technology
            </h2>
            <h2 className="text-sm font-thin">
              Discover how nuclear reactors like the CANDU are being used for
              energy generation
            </h2>
          </div>
          <div
            style={{ backgroundImage: `url(${Energy})` }}
            className="w-64 h-64 bg-cover"
          />
        </a>
      </div>
    </div>
  );
}

export default ExploreSection;
