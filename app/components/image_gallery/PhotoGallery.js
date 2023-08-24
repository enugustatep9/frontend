import React from "react";
import Gallery from "./Gallery";
import "@/app/components/image_gallery/gallery.css";
import Image from "next/image";

const PhotoGallery = () => {
  // Example array of images
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/700",
    "https://via.placeholder.com/800",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500",
  ];

  return (
    <div>
      <h1>Photo Gallery</h1>
      <Gallery>
        {images.map((imageUrl, index) => (
          <div key={index} className="masonry-item">
            <div className="image-container">
              <Image
                src={imageUrl}
                alt={`Image ${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Gallery>
    </div>
  );
};

export default PhotoGallery;
