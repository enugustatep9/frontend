import Image from "next/image";

export default function ExploreCards({ title, description, imageSrc }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="mb-4 w-full rounded-lg" />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
