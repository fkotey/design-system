import WafflesLogo from '@datacamp/waffles-assets/logos/waffles/regular.svg';
import Button from '@datacamp/waffles-button';
import { GithubBrandIcon } from '@datacamp/waffles-icons';
import { colors } from '@datacamp/waffles-tokens';
import { ClassNames, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const StyledLink = styled(Link)`
  display: inline-block;
  font-family: 'Lato';
  font-size: 16px;
  text-decoration: none;
  padding: 0 8px;
  margin: 12px 0;
  color: ${colors.greyDark};
  position: relative;
  margin-right: 8px;
  border-radius: 4px;
  line-height: 36px;
  &:hover {
    background: ${colors.porcelain};
  }
`;

const activeStyle = css`
  border-bottom
`;

const MainNavigation = (): React.ReactElement => (
  <header
    css={css`
      background: white;
      text-align: right;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 0 1px rgba(67, 90, 111, 0.47),
        0 2px 4px -2px rgba(67, 90, 111, 0.3);
      padding: 0 12px;
    `}
  >
    <div css={{ alignItems: 'center', display: 'flex' }}>
      <WafflesLogo css={{ height: 36 }} />
      <nav css={{ marginLeft: 24 }}>
        <ClassNames>
          {({ css: generateClassName }) => {
            const activeClassName = generateClassName(activeStyle);
            return (
              <>
                <StyledLink activeClassName={activeClassName} to="/">
                  Introduction
                </StyledLink>
                <StyledLink activeClassName={activeClassName} to="/articles">
                  Articles
                </StyledLink>
                <StyledLink activeClassName={activeClassName} to="/design">
                  Design
                </StyledLink>
                <StyledLink activeClassName={activeClassName} to="/content">
                  Content
                </StyledLink>
                <StyledLink activeClassName={activeClassName} to="/components">
                  Components
                </StyledLink>
              </>
            );
          }}
        </ClassNames>
      </nav>
    </div>
    <div>
      <Button
        href="https://github.com/datacamp-engineering/design-system"
        size="small"
        target="_blank"
        type="link"
      >
        <GithubBrandIcon />
        GitHub
      </Button>
    </div>
  </header>
);

export default MainNavigation;
