import { Helmet } from 'react-helmet-async';
import { FunctionComponent } from 'react';
import logo from '../../assets/img/logo.png';

interface SEOProps {
  title: string,
  description: string,
  image: string,
}

export const SEOTags: FunctionComponent<SEOProps> = ({ title, description, image }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`http://www.peternfonseca.com/${image}`}/>
    </Helmet>
);

SEOTags.defaultProps = {
  title: 'P. Fonseca',
  description: 'his personal website',
  image: logo,
};
