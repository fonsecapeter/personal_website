// TODO: REMOVE other top of file eslint comments???
import React, { Component } from 'react';
import { ProjectImage } from '../../content/portfolio/projects';


interface CarouselProps {
  readonly images: ProjectImage[];  // TODO: REMOVE.small???
}
type CarouselState = {
  selected: number,
};
type LaneImage = {
  image: ProjectImage,
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
            src={mainImage.full}
            alt="TODO: PUT THIS IN CONTENT"
          />
        </div>
        <div className="carousel-lane">
          {laneImages.map((laneImage, idx) => (
            <img
              className={laneImage.selected ? 'carousel-image-mini-selected' : 'carousel-image-mini'}
              src={laneImage.image.full}
              alt="TODO: PUT THIS IN CONTENT"
              onClick={this.select(idx)}
              key={idx}
            />
          ))}
        </div>
      </>
    );
  }
}
