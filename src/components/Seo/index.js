import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

function Seo({ description, lang, meta, postTitle, image, title, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || '';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title} ${
        postTitle ? ' | ' + postTitle : ''
      }`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `${type || 'website'}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
      ].concat(meta)}
    >
      <meta charset="utf-8" />
      <title>The Open Graph protocol</title>
      <meta
        name="description"
        content="The Open Graph protocol enables any web page to become a rich object in a social graph."
      />
      <script type="text/javascript">
        var _sf_startpt = new Date().getTime();
      </script>
      <meta property="og:title" content="Open Graph protocol" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ogp.me/" />
      <meta property="og:image" content="https://ogp.me/logo.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="The Open Graph logo" />
      <meta
        property="og:description"
        content="The Open Graph protocol enables any web page to become a rich object in a social graph."
      />
      <meta
        prefix="fb: https://ogp.me/ns/fb#"
        property="fb:app_id"
        content="115190258555800"
      />
      <link
        rel="alternate"
        type="application/rdf+xml"
        href="https://ogp.me/ns/ogp.me.rdf"
      />
      <link
        rel="alternate"
        type="text/turtle"
        href="https://ogp.me/ns/ogp.me.ttl"
      />
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
