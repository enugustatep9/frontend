"use client";
import React from "react";

const Card8 = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-6">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="mb-4 w-full rounded-lg" />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card8;
