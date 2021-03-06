/* eslint-disable import/no-anonymous-default-export */
import { colors } from '@datacamp/waffles-tokens';
import { Page } from 'catalog';
import _ from 'lodash';
import React from 'react';

import CustomHeader from '../../../components/CustomHeader';

export default () => {
  const obj = Object.keys(colors);
  return (
    <main>
      <CustomHeader
        description="Apply or override text color."
        section="Utility Classes"
        subSection="Color"
      />
      <Page>
        <header>
          <p>
            These classes add <code>color</code> to an element, so they can be
            used for building or customizing an element. They follow the format{' '}
            <code>.dc-u-color-[color-name]</code>.
          </p>
        </header>

        <section className="dc-u-bgc-white dc-u-mt-24 dc-u-p-8">
          <table className="table">
            <thead>
              <tr>
                <th className="dc-u-w-1pc">Class Name</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((name) => (
                <tr key={name}>
                  <td>
                    <code className="dc-u-ws-nowrap">
                      .dc-u-color-{_.kebabCase(name)}
                    </code>
                  </td>
                  <td>
                    <code>color: $dc-{_.kebabCase(name)};</code>
                  </td>
                  <td className={`dc-u-color-${_.kebabCase(name)}`}>
                    {_.kebabCase(name)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Page>
    </main>
  );
};
