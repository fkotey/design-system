/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: { content: string; name: string }[];
  title: string;
}

function SEO({ description, lang, meta, title }: SEOProps): JSX.Element {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: site.siteMetadata.author,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ].concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
};

export default SEO;
