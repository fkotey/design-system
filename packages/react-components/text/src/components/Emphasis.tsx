import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import PlainString from '../alternateComponents/PlainString';
import baseStyle from '../baseStyle';

import Strong from './Strong';
import Text from './Text';

interface EmphasisProps {
  /**
   * The content to display. Can contain a combination of strings, Text
   * components, and Strong Components.
   */
  children: ReactNode;
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
}

const emphasisStyle = css(baseStyle, {
  fontStyle: 'italic',
  fontWeight: tokens.fontWeight.regular.value,
  lineHeight: tokens.size.font[300].value,
});

const Emphasis = ({
  children,
  className,
  dataAttributes,
}: EmphasisProps): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <em className={className} css={emphasisStyle} {...parsedDataAttributes}>
      {children}
    </em>
  );
};

const validChildType = PropTypes.oneOfType([
  childrenOfType(Text),
  childrenOfType(Strong),
  childrenOfType(PlainString),
  PropTypes.string,
  PropTypes.number,
]);

Emphasis.propTypes = {
  children: PropTypes.oneOfType([
    validChildType,
    PropTypes.arrayOf(validChildType),
  ]),
};

export default Emphasis;
