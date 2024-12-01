// const mainImage = require('../assets/img/portfolio/shop_class_shelf/main/100.jpg').default;

export type Image = {
  readonly full: string,
  readonly half?: string,
  readonly quarter?: string,
  readonly alt: string,
};

export const image = (path: string, ext: string, alt: string): Image => ({
  full: require(`../assets/img/${path}/100.${ext}`).default,
  half: require(`../assets/img/${path}/50.${ext}`).default,
  quarter: require(`../assets/img/${path}/25.${ext}`).default,
  alt: alt,
});
