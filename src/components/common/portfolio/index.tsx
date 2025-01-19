// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import PortfolioItem from './item';
import { Project } from '../../../content/portfolio/projects';
import '../../../assets/scss/portfolio.scss';
import SEOTags from '../seo';
import preloadImages from '../image/preload';

interface PortfolioProps {
  readonly title: String;
  readonly projects: Project[];
  readonly category: string;
}

interface PreloadGroup {
  images: string[];
  setIsPreloaded: CallableFunction;
  delay: number;
}

const Portfolio = ({ title, projects, category }: PortfolioProps) => {
  const preloadGroups: PreloadGroup[] = [];
  let preloadGroupCount = 2;
  if (projects.length > 32) {
    preloadGroupCount = 5;
  }
  const [areGroupsPreloaded, setAreGroupsPreloaded] = useState(Array(preloadGroupCount).fill(false));
  const setIsGroupPreloaded = (idx) => {
    return (isGroupPreloaded) => setAreGroupsPreloaded(prevAreGroupsPreloaded => {
      const newAreGroupsPreloaded = [...prevAreGroupsPreloaded];
      newAreGroupsPreloaded[idx] = isGroupPreloaded;
      return newAreGroupsPreloaded;
    });
  };
  for (let idx = 0; idx < preloadGroupCount; idx++) {
    preloadGroups.push({
      images: [],
      setIsPreloaded: setIsGroupPreloaded(idx),
      delay: (idx * 1000) + 500,
    });
  }
  const groupId = idx => Math.floor(idx / Math.ceil(projects.length / preloadGroupCount));
  projects.forEach((project, idx) => {
    preloadGroups[groupId(idx)].images.push(project.icon.src);
  });
  useEffect(() => {
    preloadGroups.forEach(group => {
      preloadImages({
        images: group.images,
        setIsPreloaded: group.setIsPreloaded,
        delay: group.delay,
      });
    });
  }, []);
  return (
    <div>
      <SEOTags title={`P. Fonseca\'s ${category}`} />
      <h1 className="page-title">{ title }</h1>
      <div className="portfolio-list">
        <div className="portfolio-column">
          {projects.map((project, idx) => (
            <PortfolioItem
              project={project}
              key={project.name}
              category={category}
              imagePreloaded={areGroupsPreloaded[groupId(idx)]}
            />
          ))}
        </div>
        <div className="portfolio-column-desktop">
          {projects.map((project, idx) => {
            if (idx % 2 === 0) {
              return (
                <PortfolioItem
                  project={project}
                  key={project.name}
                  category={category}
                  imagePreloaded={areGroupsPreloaded[groupId(idx)]}
                />
              );
            }
            return '';
          })}
        </div>
        <div className="portfolio-column-desktop">
          {projects.map((project, idx) => {
            if (idx % 2 !== 0) {
              return (
                <PortfolioItem
                  project={project}
                  key={project.name}
                  category={category}
                  imagePreloaded={areGroupsPreloaded[groupId(idx)]}
                />
              );
            }
            return '';
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // for dynamic import
