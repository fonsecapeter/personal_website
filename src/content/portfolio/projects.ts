import { Icon, Image, Video } from '../media';

interface Org {
  readonly name: string;
  readonly url: string;
  readonly link?: string;
}

interface ProjectLink {
  readonly text: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly links: ProjectLink[];
  readonly date: string;
  readonly keywords: string;
  readonly icon: Icon;
  readonly images: Image[];  // landscape or square work best
  readonly video?: Video;
  readonly description: string;
  readonly bullets: string[];
  readonly org?: Org;
}
