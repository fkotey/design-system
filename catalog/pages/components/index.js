import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Components"
        subSection="Intro"
        description="Use components as building blocks as you develop new products and features."
      />

      <Page>
        <section>
          <h4 class="dc-u-mb-8">Waffles Needs You!</h4>
          <div class="dc-card dc-u-p-24">
            Uh oh, this page isn't baked yet. <a href="https://github.com/datacamp/design-system">Help make some Waffles</a>.
          </div>
        </section>
      </Page>
    </main>
  );
};