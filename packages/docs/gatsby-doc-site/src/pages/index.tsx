import Card from '@datacamp/waffles-card';
import { ArrowRightIcon } from '@datacamp/waffles-icons';
import { Code, Heading, Paragraph } from '@datacamp/waffles-text';
import { colors, gradients } from '@datacamp/waffles-tokens';
import { ssrSafeFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

import ComponentIllustration from '../assets/illustration-component.svg';
import ContentIllustration from '../assets/illustration-content.svg';
import DesignIllustration from '../assets/illustration-design.svg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const contentSection = css`
  padding: 32px;
  border-left: 1px solid ${colors.greyLighter};
  &${ssrSafeFirstChildSelector} {
    border-left: 0;
  }
`;

const readMoreLink = css`
  font-weight: bold;
  font-family: 'Lato';
  text-decoration: none;
  color: ${colors.greyDark};
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: ${colors.primary};
  }
`;

const IndexPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Introduction" />

    <div
      css={css`
        background: ${gradients.chambrayCloudburst};
        padding: 146px 32px 96px;
        padding-bottom: 160px;
        p {
          max-width: 80ch;
        }
      `}
    >
      <Heading as="h1" css={{ color: 'white' }} size={800} multiLine>
        Waffles is DataCamp's Design System
      </Heading>
      <Paragraph css={{ color: 'white', fontSize: 18 }}>
        Waffles provides all the tools you need to build wonderful experiences
        that look, feel, sound and smell like DataCamp. They are also our
        favourite snack.
      </Paragraph>
    </div>

    <section css={{ marginTop: -160, maxWidth: 1024, padding: 32 }}>
      <Card css={{ display: `flex` }} elevation={2}>
        <div css={contentSection}>
          <ContentIllustration />
          <Heading as="h2" size={600}>
            Content
          </Heading>
          <Paragraph>
            Learn about how we use language to create a thoughtful experience.
          </Paragraph>
          <Link css={readMoreLink} to="/content">
            View Content Guidelines
            <ArrowRightIcon css={{ flexShrink: 0, marginLeft: 4 }} />
          </Link>
        </div>
        <div css={contentSection}>
          <DesignIllustration />
          <Heading as="h2" size={600}>
            Design
          </Heading>
          <Paragraph>
            Learn about how we use language to create a thoughtful experience.
          </Paragraph>
          <Link css={readMoreLink} to="/content">
            View Design Guidelines
            <ArrowRightIcon css={{ flexShrink: 0, marginLeft: 4 }} />
          </Link>
        </div>
        <div css={contentSection}>
          <ComponentIllustration />
          <Heading as="h2" size={600}>
            Components
          </Heading>
          <Paragraph>
            Learn about how we use language to create a thoughtful experience.
          </Paragraph>
          <Link css={readMoreLink} to="/content">
            Explore Component Library
            <ArrowRightIcon css={{ flexShrink: 0, marginLeft: 4 }} />
          </Link>
        </div>
      </Card>

      <Card css={{ marginTop: 16, padding: 32 }} elevation={2}>
        <Heading as="h2" size={500}>
          Migrating Icons
        </Heading>
        <Paragraph css={{ maxWidth: '80ch' }}>
          A new article on migrating icons has been published. Migrating Icons
          talks about how to transition from the styleguide icons to using the{' '}
          <Code>@datacamp/waffles-icons</Code> package.
        </Paragraph>
        <Link css={readMoreLink} to="/articles/02-icon-migration">
          Read Full Article
          <ArrowRightIcon css={{ flexShrink: 0, marginLeft: 4 }} />
        </Link>
      </Card>
    </section>
  </Layout>
);

export default IndexPage;
