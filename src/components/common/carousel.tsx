import React, { useState } from 'react';
import { Image } from '../../content/media';


interface CarouselProps {
  readonly images: Image[];
}
type LaneImage = {
  image: Image,
  selected: boolean,
};

export const Carousel = ({ images }: CarouselProps) => {
  const [selectedImage, selectImage] = useState(0);

  let mainImage;
  let laneImages: LaneImage[] = [];
  let laneImageClass = 'carousel-lane-image';
  if (images.length > 4) {
    laneImageClass = 'carousel-lane-image-mini';
  }
  images.forEach((image, idx) => {
    if (idx == selectedImage) {
      mainImage = image;
      laneImages.push({ image: image, selected: true });
    } else {
      laneImages.push({ image: image, selected: false });
    }
  });
  if (laneImages.length == 1) {
    laneImages = [];
  }

  return (
    <>
      <div className="carousel-image-main-container">
        <img
          className="carousel-image-main"
          src={mainImage.half}
          alt={mainImage.alt}
        />
      </div>
      <div className="carousel-lane">
        {laneImages.map((laneImage, idx) => (
          <img
            className={laneImage.selected ? `${laneImageClass}-selected` : laneImageClass}
            src={laneImage.image.quarter}
            alt={laneImage.image.alt}
            onClick={() => selectImage(idx)}
            key={idx}
          />
        ))}
      </div>
    </>
  );
};
