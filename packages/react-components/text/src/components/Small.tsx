import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import baseStyle from '../baseStyle';
import computeDataAttributes from '../computeDataAttributes';
import validateChildrenProp from '../validateChildrenProp';
import Emphasis from './Emphasis';
import Strong from './Strong';

interface SmallProps {
  children: string | (string | React.ReactElement)[];
  className?: string;
  dataAttributes?: { [key: string]: string };
}

const smallStyle = css(baseStyle, {
  fontSize: tokens.size.font[200].value,
  lineHeight: tokens.size.font.base.value,
});

const Small: React.FC<SmallProps> = props => {
  const { children, className, dataAttributes } = props;
  validateChildrenProp(props, 'Small', [Strong, Emphasis]);

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <small className={className} css={smallStyle} {...parsedDataAttributes}>
      {children}
    </small>
  );
};

export default Small;