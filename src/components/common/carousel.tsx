// TODO: REMOVE other top of file eslint comments???
import React, { Component } from 'react';
import { Image } from '../../content/media';


interface CarouselProps {
  readonly images: Image[];  // TODO: REMOVE.small???
}
type CarouselState = {
  selected: number,
};
type LaneImage = {
  image: Image,
  selected: boolean,
};

const initialState: CarouselState = {
  selected: 0,
};

export class Carousel extends Component<CarouselProps> {
  readonly state = initialState;

  constructor(props: CarouselProps) {
    super(props);
    this.select = this.select.bind(this);
  }

  private select(idx: number) {
    return () => {
      this.setState({ selected: idx });
    };
  }

  public render() {
    let mainImage;
    let laneImages: LaneImage[] = [];
    let laneImageClass = 'carousel-lane-image';
    if (this.props.images.length > 4) {
      laneImageClass = 'carousel-lane-image-mini';
    }
    this.props.images.forEach((image, idx) => {
      if (idx == this.state.selected) {
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
              onClick={this.select(idx)}
              key={idx}
            />
          ))}
        </div>
      </>
    );
  }
}
