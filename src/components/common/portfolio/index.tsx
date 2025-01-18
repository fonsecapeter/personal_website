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
  isPreloaded: boolean;
  setIsPreloaded: CallableFunction;
  delay: number;
}

const Portfolio = ({ title, projects, category }: PortfolioProps) => {
  const [isGroup0Preloaded, setIsGroup0Preloaded] = useState(false);
  const [isGroup1Preloaded, setIsGroup1Preloaded] = useState(false);
  let groupCount = 2;
  const preloadGroups: PreloadGroup[] = [
    {
      images: [],
      isPreloaded: isGroup0Preloaded,
      setIsPreloaded: setIsGroup0Preloaded,
      delay: 500,
    },
    {
      images: [],
      isPreloaded: isGroup1Preloaded,
      setIsPreloaded: setIsGroup1Preloaded,
      delay: 1500,
    },
  ];
  if (projects.length > 32) {
    const [isGroup2Preloaded, setIsGroup2Preloaded] = useState(false);
    const [isGroup3Preloaded, setIsGroup3Preloaded] = useState(false);
    const [isGroup4Preloaded, setIsGroup4Preloaded] = useState(false);
    groupCount = 5;
    preloadGroups.push(
      {
        images: [],
        isPreloaded: isGroup2Preloaded,
        setIsPreloaded: setIsGroup2Preloaded,
        delay: 2500,
      },
      {
        images: [],
        isPreloaded: isGroup3Preloaded,
        setIsPreloaded: setIsGroup3Preloaded,
        delay: 3500,
      },
      {
        images: [],
        isPreloaded: isGroup4Preloaded,
        setIsPreloaded: setIsGroup4Preloaded,
        delay: 4500,
      },
    );
  }
  const groupId = idx => Math.floor(idx / Math.ceil(projects.length / groupCount));
  projects.forEach((project, idx) => {
    preloadGroups[groupId(idx)].images.push(project.icon.src);
  });
  useEffect(() => {
    preloadGroups.forEach(group => {
      preloadImages({
        images: group.images,
        isPreloaded: group.isPreloaded,
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
              imagePreloaded={preloadGroups[groupId(idx)].isPreloaded}
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
                  imagePreloaded={preloadGroups[groupId(idx)].isPreloaded}
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
                  imagePreloaded={preloadGroups[groupId(idx)].isPreloaded}
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
