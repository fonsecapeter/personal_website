type Org = {
  readonly name: string,
  readonly url: string,
  readonly link?: string,
};

type ProjectIcon = {
  readonly src: string,
  readonly small?: boolean,
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
  readonly icon: ProjectIcon,
  readonly video?: string,
  readonly description: string,
  readonly bullets: string[],
  readonly org?: Org,
  readonly aspectRatio?: string,  // default: '16-9'
}
