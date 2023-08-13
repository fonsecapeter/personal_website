interface Org {
  name: string,
  url: string,
  link?: string,
}

interface ProjectIcon {
  src: string,
  small?: boolean,
}

interface ProjectLink {
  text: string,
  url: string,
}

export interface Project {
  name: string,
  links: Array<ProjectLink>,
  date: string,
  keywords: string,
  icon: ProjectIcon,
  description: string,
  bullets: Array<string>,
  org?: Org,
}
