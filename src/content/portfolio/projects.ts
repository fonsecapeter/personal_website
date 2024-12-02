import { Icon, Image, Video } from '../media';

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
  readonly icon: Icon,
  readonly images: Image[],
  readonly video?: Video,
  readonly description: string,
  readonly bullets: string[],
  readonly org?: Org,
};
