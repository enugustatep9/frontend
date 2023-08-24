"use client";
import { useState } from "react";
import ExploreCards from "./ExploreCards";

const TabComponent = ({ tabs, tabContents }) => {
  const [activeTab, setActiveTab] = useState(0);
  const cards = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageSrc: "/images/card1.jpg", // Provide the actual image source
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageSrc: "/images/card2.jpg", // Provide the actual image source
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      imageSrc: "/images/card2.jpg", // Provide the actual image source
    },
    // ... add more cards as needed
  ];

  return (
    <>
      <div className="flex  md:w-[87%] md:mx-auto md:items-center mb-8">
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 md:mx-0 mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-auto p-4 md:py-2 md:px-auto rounded-full ${
                activeTab === index
                  ? "bg-[#F1DDC4] text-black font-bold"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {tabContents.map((tabContent, index) => (
        <div
          key={index}
          className={`border border-gray-300 rounded-md p-4 w-[87%] mx-auto transition-opacity duration-300 ease-in-out mb-28 ${
            activeTab === index ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {tabContent.title}
          {tabContent.description}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <ExploreCards
                tabContent={tabContent}
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TabComponent;
