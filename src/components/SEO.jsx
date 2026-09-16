import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '../contexts/ContentContext';

const SEO = ({ title, description, name, type = 'website', url, image }) => {
    const { seo: seoDefaults, profile } = useContent();

    const finalTitle = title || seoDefaults.title;
    const finalDescription = description || seoDefaults.description;
    const finalName = name || profile.name;
    const finalUrl = url || seoDefaults.url;
    const finalImage = image || seoDefaults.image;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{finalTitle}</title>
            <meta name='description' content={finalDescription} />
            <meta name="keywords" content={seoDefaults.keywords} />
            <meta name="author" content={profile.name} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content={seoDefaults.siteName} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={finalName} />
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
            {/* End Twitter tags */}
        </Helmet>
    );
}

export default SEO;
