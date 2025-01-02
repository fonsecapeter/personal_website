// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ALL_PROJECTS from '../../../content/portfolio/all';
import Carousel from '../image/carousel';
import ImageModal from '../image/modal';
import NotFound from '../not_found';
import '../../../assets/scss/portfolio.scss';
import SEOTags from '../seo';

type PortfolioDetailParams = {
  projectKey: string,
};

const notFoundMsg = "I haven't made that project.... yet";

export const PortfolioDetail = () => {
  const { projectKey } = useParams<PortfolioDetailParams>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goBack = (category: string) => {
    navigate(`/${category}`);
  };

  const [category, projectId] = projectKey.split('.');
  if (!(category in ALL_PROJECTS)) {
    return (<NotFound msg={notFoundMsg} />);
  }
  const project = ALL_PROJECTS[category].find(proj => proj.id === projectId);
  if (project === undefined) {
    return (<NotFound msg={notFoundMsg} />);
  }

  const linkClass = 'portfolio-detail-link';
  let links = null;
  if (project.links.length > 0) {
    links = (
      <span>
        <a href={project.links[0].url} className={linkClass} target="blank">
          {project.links[0].text}
        </a>
        {project.links.slice(1).map(projectLink => (
          <span key={projectLink.url}>
            <span className="portfolio-detail-dot">·</span>
            <a href={projectLink.url} className={linkClass} target="blank">
              {projectLink.text}
            </a>
          </span>
        ))}
      </span>
    );
  }

  let media;
  if (project.video) {
    const aspectRatio = project.video.aspectRatio || '16-9';
    media = (
      <iframe
        data-testid="portfolio-detail-vid"
        className={`portfolio-detail-media-vid-${aspectRatio}`}
        src={project.video.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}>
      </iframe>
    );
  } else if (project.images.length > 1) {
    media = (
      <div className="portfolio-detail-media-img">
        <Carousel images={project.images} />
      </div>
    );
  } else {
    media = (
      <>
        <img
          data-testid="portfolio-detail-img"
          className="portfolio-detail-media-img"
          src={project.images[0].half}
          alt={project.images[0].alt}
          onClick={() => setIsModalOpen(true)}
        />
        <ImageModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <img
            className="image-modal-full-size-image"
              src={project.images[0].full}
              alt={project.images[0].alt}
          />
        </ImageModal>
      </>
    );
  }

  return (
    <div
      className="portfolio-detail"
    >
      <SEOTags title={project.name} description={project.description} image={project.icon.src} />
      <h1 className="portfolio-detail-title">
        {project.name}
      </h1>
      <div className="portfolio-detail-media">
        {media}
      </div>
      <div>
        <div>
          <div>
            {links}
          </div>
          <div className="portfolio-detail-info">
            <span className="portfolio-detail-date">{project.date}</span>
            {project.org ? (
              <a
                className="portfolio-detail-org"
                href={project.org.link}
                target="blank"
              >
                {project.org.name}
              </a>
            ) : null}
            <p className="portfolio-detail-keywords">{project.keywords}</p>
          </div>
          <p className="portfolio-detail-description">{project.description}</p>
          <ul className="portfolio-detail-bullets">
            {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
          </ul>
          <button
            className="portfolio-detail-back-button"
            type="button"
            onClick={() => {goBack(category);}}
          >
            ← BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail; // for dynamic import
