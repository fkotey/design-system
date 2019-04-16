import React from 'react';
import { Page } from 'catalog';

import { colors } from '@datacamp/waffles-core/tokens.json';
import { getColor, getContrastColor } from '@datacamp/waffles-core';
import CustomHeader from '../../../components/CustomHeader';
import dashify from '../../../helpers/dashify';

export default () => {
  const obj = Object.keys(colors);
  return (
    <main>
      <CustomHeader
        section="Utility Classes"
        subSection="Background"
        description="Apply or override background colors."
      />

      <Page>
        <section>
          <p>
            Background color utility classes are named using the format{' '}
            <code>.dc-u-bgc-[color-name]</code>. They can be used for building
            or customizing an element.
          </p>

          <ul className="dc-u-fx dc-u-fx-fww dc-u-m-none dc-u-p-none">
            {obj.map(name => (
              <li
                className="dc-u-fx dc-u-fx-fdc dc-u-fx-aic dc-u-fx-jcc"
                key={name}
                style={{
                  background: getColor(name),
                  width: '256px',
                  height: '128px',
                  color: getContrastColor(name),
                }}
              >
                <code>{`.dc-u-bgc-${dashify(name)}`}</code>
              </li>
            ))}
          </ul>
        </section>
      </Page>
    </main>
  );
};