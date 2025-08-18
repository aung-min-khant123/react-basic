import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/29900436/pexels-photo-29900436.jpeg",
  "https://images.pexels.com/photos/29900442/pexels-photo-29900442.jpeg",
  "https://images.pexels.com/photos/29900427/pexels-photo-29900427.jpeg",
  "https://images.pexels.com/photos/29900432/pexels-photo-29900432.jpeg",
];

function SelectImg2() {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <>
      <img src={selectedImg} className="big-img" alt="Selected" />

      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => setSelectedImg(image)}
            style={{
              filter:
                selectedImg === image ? "grayscale(100%) opacity(0.5)" : "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .big-img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border: 2px solid #ccc;
          border-radius: 8px;
        }
        .thumbnails {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
          transition: filter 0.3s ease;
        }
      `}</style>
    </>
  );
}

export default SelectImg2;
