import React, { useState } from 'react';
import { Image } from '../../content/media';
import useImagePreloader from './preload_images';


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
  // preload main version of lane images on first load so they're ready
  // for carousel clicking
  useImagePreloader(laneImages.map((img) => img.image.half));

  return (
    <>
      <div className="carousel-image-main-container" data-testid="carousel">
        <img
          className="carousel-image-main"
          data-testid="carousel-main-image"
          src={mainImage.half}
          alt={`${mainImage.alt} (large)`}
        />
      </div>
      <div className="carousel-lane">
        {laneImages.map((laneImage, idx) => (
          <img
            className={laneImage.selected ? `${laneImageClass}-selected` : laneImageClass}
            src={laneImage.image.quarter}
            alt={`${laneImage.image.alt} (small)`}
            onClick={() => selectImage(idx)}
            key={idx}
          />
        ))}
      </div>
    </>
  );
};
