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
  id: string,
  name: string,
  links: ProjectLink[],
  date: string,
  keywords: string,
  icon: ProjectIcon,
  description: string,
  bullets: string[],
  org?: Org,
}
