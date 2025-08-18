import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/29900436/pexels-photo-29900436.jpeg",
  "https://images.pexels.com/photos/29900442/pexels-photo-29900442.jpeg",
  "https://images.pexels.com/photos/29900427/pexels-photo-29900427.jpeg",
  "https://images.pexels.com/photos/29900432/pexels-photo-29900432.jpeg",
];
function SelectImage() {
  const [SelectImg, setSelectImg] = useState(images[0]);
  return (
    <>
      <img src={SelectImg} class="big-img" alt="img" />
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <img
              className="thumbnail"
              key={index}
              src={image}
              onClick={() => setSelectImg(image )} 
            />
          );
        })}
      </div>
      <style jsx>
        {`
          .big-img {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
          .thumbnails {
            display: flex;
            gap: 0.5rem;
          }
          .thumbnail {
            width: 100px;
            height: 100px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

export default SelectImage;
