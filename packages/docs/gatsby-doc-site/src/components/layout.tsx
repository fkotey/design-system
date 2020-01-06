/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { GlobalFontFaces } from '@datacamp/waffles-text';
import { colors } from '@datacamp/waffles-tokens';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import MainNavigation from './main-navigation';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <GlobalFontFaces />
      <Global
        styles={css`
          body {
            background-color: ${colors.porcelain};
            margin: 0;
          }
        `}
      />
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
