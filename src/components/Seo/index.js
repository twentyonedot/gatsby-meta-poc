import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

function Seo({ description, lang, meta, title, postTitle, image, type }) {
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
      <link
        rel="canonical"
        href="https://eloquent-raman-300006.netlify.app"
      ></link>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />

      <meta
        name="google-site-verification"
        content="OoTPHx7nojGJ8UvFO0fEHn0FiLWWVBCHGkYKyB_Ip7s"
      />
      <meta
        name="google-site-verification"
        content="OKZ9uKMu6jWiTNMKW3wroo6LyYjBefrWPzomPzTKryI"
      />
      <meta
        name="google-site-verification"
        content="ktQYex5oJA4yoT3FArp8cp2SSpuEEO1yIOnXyPYMmw4"
      />
      <meta
        name="google-site-verification"
        content="vbHRCzhbDW8G307pT3kTkmEsSKT29m1qep-2RLpihoY"
      />
      <meta name="google" content="nositelinkssearchbox" />

      <link
        rel="stylesheet"
        href="https://cdn4.mxpnl.com/static/asset-cache/82b9f57a9c4ea757e88304c337dfdd32/compiled/gdpr-external.min.css"
        type="text/css"
      />

      <title>
        Shreyas Doshi on choosing, refining, and tracking product metrics&nbsp;
        - Mixpanel
      </title>
      <meta name="robots" content="max-image-preview:large" />
      <link
        rel="alternate"
        hreflang="en"
        href="https://mixpanel.com/blog/shreyas-doshi-product-metrics/"
      />
      <link
        rel="alternate"
        hreflang="zh-hant"
        href="https://mixpanel.com/zh-hant/blog/shreyas-doshi-on-choosing-refining-and-tracking-product-metrics/"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://mixpanel.com/ja/blog/shreyas-doshi-on-choosing-refining-and-tracking-product-metrics/"
      />
      <link
        rel="alternate"
        hreflang="in"
        href="https://mixpanel.com/in/blog/shreyas-doshi-product-metrics/"
      />

      <meta property="fb:pages" content="119004118110207" />

      <meta
        name="description"
        content="In the next installment of our Innovators series, Stripe's Shreyas Doshi shares practical advice for choosing, refining, and tracking key product metrics."
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link
        rel="canonical"
        href="https://mixpanel.com/blog/shreyas-doshi-product-metrics/"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Shreyas Doshi on choosing, refining, and tracking product metrics&nbsp; - Mixpanel"
      />
      <meta
        property="og:description"
        content="In the next installment of our Innovators series, Stripe's Shreyas Doshi shares practical advice for choosing, refining, and tracking key product metrics."
      />
      <meta
        property="og:url"
        content="https://mixpanel.com/blog/shreyas-doshi-product-metrics/"
      />
      <meta property="og:site_name" content="Mixpanel" />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/mixpanel/"
      />
      <meta property="article:tag" content="innovation" />
      <meta property="article:tag" content="metrics" />
      <meta property="article:tag" content="product leaders" />
      <meta property="article:section" content="Innovators" />
      <meta
        property="article:published_time"
        content="2021-02-10T16:36:53-07:00"
      />
      <meta
        property="article:modified_time"
        content="2021-03-17T23:01:18-07:00"
      />
      <meta property="og:updated_time" content="2021-03-17T23:01:18-07:00" />
      <meta
        property="og:image"
        content="https://mixpanel.com/wp-content/uploads/2021/02/shreya-doshi.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://mixpanel.com/wp-content/uploads/2021/02/shreya-doshi.png"
      />
      <meta property="og:image:width" content="960" />
      <meta property="og:image:height" content="541" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="In the next installment of our Innovators series, Stripe's Shreyas Doshi shares practical advice for choosing, refining, and tracking key product metrics."
      />
      <meta
        name="twitter:title"
        content="Shreyas Doshi on choosing, refining, and tracking product metrics&nbsp; - Mixpanel"
      />
      <meta name="twitter:site" content="@mixpanel" />
      <meta
        name="twitter:image"
        content="https://mixpanel.com/wp-content/uploads/2021/02/shreya-doshi.png"
      />
      <meta name="twitter:creator" content="@mixpanel" />

      <link rel="shortlink" href="https://mixpanel.com/?p=69598" />
      <meta
        name="generator"
        content="WPML ver:4.3.11 stt:61,1,65,4,3,66,28,29,2;"
      />

      <meta name="generator" content="Site Kit by Google 1.1.1" />
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
