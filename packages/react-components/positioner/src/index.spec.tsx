import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Positioner from './index';

describe('Positioner', () => {
  ([
    'bottomLeft',
    'bottom',
    'bottomRight',
    'left',
    'right',
    'topLeft',
    'top',
    'topRight',
  ] as const).forEach(position => {
    it(`renders on the ${position} on the target`, async () => {
      const ref = React.createRef<HTMLDivElement>();
      const { baseElement } = await axeRender(
        <>
          <div
            ref={ref}
            css={{ height: 50, width: 50 }}
            data-test-id="target"
          />
          <Positioner position={position} target={ref} visible>
            <div css={{ height: 10, width: 10 }} data-test-id="element" />
          </Positioner>
        </>
      );

      expect(baseElement).toMatchSnapshot();
    });
  });
});