import React from "react";
import LandingBanner from "../shared/LandingBanner";
import ExploreSection from "../shared/ExploreSection";

function LandingPage() {
  return (
  <div>
    <LandingBanner Title={"Nuclear Energy"}/>
    <div className="bg-space-cadet p-40">
    <ExploreSection />
    </div>
    
  </div>
  );
}

export default LandingPage;
