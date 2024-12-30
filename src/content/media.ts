// const mainImage = require('../assets/img/portfolio/shop_class_shelf/main/100.jpg').default;

export interface Image {
  readonly full: string;
  readonly half: string;
  readonly quarter: string;
  readonly alt: string;
}

export interface Icon {
  readonly src: string;
  readonly alt: string;
}

export interface Video {
  readonly src: string;
  readonly aspectRatio?: string; // default: '16-9'
}
