import React from "react";
import Banner from "../images/banner.jpg"

function LandingBanner({Title}) {
  return (
    <div className="flex flex-row w-full h-screen items-center">
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="w-2/3 h-full bg-no-repeat bg-cover"
      />
      <div className="tems-center pl-20">
        <div className="flex flex-col text-left gap-4">
          <h2 className="text-7xl text-space-cadet font-extrabold">
            {Title}
          </h2>
          {window.location.pathname === "/" && <h2 className="font-thin text-xl">The good, the bad & the ugly</h2>}
        </div>
      </div>
    </div>
  );
}

export default LandingBanner
