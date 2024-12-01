import { Image } from '../image';

type Org = {
  readonly name: string,
  readonly url: string,
  readonly link?: string,
};

type ProjectLink = {
  readonly text: string,
  readonly url: string,
};

export type Project = {
  readonly id: string,
  readonly name: string,
  readonly links: ProjectLink[],
  readonly date: string,
  readonly keywords: string,
  readonly icon: Image,
  readonly images: Image[],
  readonly video?: string,
  readonly description: string,
  readonly bullets: string[],
  readonly org?: Org,
  readonly aspectRatio?: string,  // default: '16-9'
};
