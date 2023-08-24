import Image from "next/image";
import Pic from "@/public/images/estate.png";
export default function ExploreCards({
  title,
  description,
  imageSrc,
  tabContent,
}) {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        {imageSrc && (
          <img src={imageSrc} alt={title} className="mb-4 w-full rounded-lg" />
        )}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h3>{tabContent.title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <div class="card relative rounded-lg overflow-hidden">
        <Image
          src={Pic}
          alt="Card Image"
          class="w-full h-auto transform transition-transform duration-300 hover:scale-105"
        />
        <div className="border bg-white -mt-10">
          <h1>hey</h1>
        </div>

        <div class="overlay absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-80">
          <div class="caption absolute bottom-0 left-0 p-4 text-white">
            <h3 class="text-lg font-semibold text-black">Card Caption</h3>
            <p class="text-sm text-black">Description or details...</p>
          </div>
        </div>
      </div>
    </>
  );
}
