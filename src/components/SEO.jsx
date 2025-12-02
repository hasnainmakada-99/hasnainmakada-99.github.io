import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, url, image }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content="Hasnain Makada, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, TypeScript, Node.js, Software Engineer, Frontend Developer, Backend Developer" />
            <meta name="author" content="Hasnain Makada" />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Hasnain Makada Portfolio" />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {/* End Twitter tags */}
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'Hasnain Makada - Full Stack Developer & Software Engineer | Portfolio',
    description: 'Hasnain Makada - Full Stack Developer & Software Engineer. Explore my portfolio showcasing innovative web applications, React projects, and cutting-edge development work.',
    name: 'Hasnain Makada',
    type: 'website',
    url: 'https://hasnainmakada-99.github.io/',
    image: 'https://hasnainmakada-99.github.io/Og_Cover.png'
};

export default SEO;
