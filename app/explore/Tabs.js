"use client";
import React, { useState } from "react";
import AllCard from "./cards/AllCard";
import EducationCard from "./cards/EducationCard";
import TechCard from "./cards/TechCard";
import AgricultureCard from "./cards/AgricultureCard";
import EconomyCard from "./cards/EconomyCard";
import TourismCard from "./cards/TourismCard";
import RealEstateCard from "./cards/RealEstateCard";
import HealthCard from "../components/invest.js/HealthCard";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "All",
    "Education",
    "Tech",
    "Agriculture",
    "Economy",
    "Tourism",
    "Real Estate",
    "Health",
  ];

  return (
    <div className="md:w-[1180px] mx-auto p-4">
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-gray-600 ${
              activeTab === index
                ? "bg-secondary text-white font-bold"
                : "bg-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className={activeTab === 0 ? "block" : "hidden"}>
          <AllCard />
        </div>
        <div className={activeTab === 1 ? "block" : "hidden"}>
          <EducationCard />
        </div>
        <div className={activeTab === 2 ? "block" : "hidden"}>
          <TechCard />
        </div>
        <div className={activeTab === 3 ? "block" : "hidden"}>
          <AgricultureCard />
        </div>
        <div className={activeTab === 4 ? "block" : "hidden"}>
          <EconomyCard />
        </div>
        <div className={activeTab === 5 ? "block" : "hidden"}>
          <TourismCard />
        </div>
        <div className={activeTab === 6 ? "block" : "hidden"}>
          <RealEstateCard />
        </div>
        <div className={activeTab === 7 ? "block" : "hidden"}>
          <HealthCard />
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
