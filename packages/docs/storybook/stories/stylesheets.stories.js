import './stylesheet.scss';

import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('stylesheets', module)
  .add('button', () => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <button className="dc-btn dc-btn--primary dc-btn--sm">
                primary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary">primary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary dc-btn--lg">
                primary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--primary-light dc-btn--sm">
                primary-light small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary-light">
                primary-light
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary-light dc-btn--lg">
                primary-light large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--secondary dc-btn--sm">
                secondary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--secondary">secondary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--secondary dc-btn--lg">
                secondary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--tertiary dc-btn--sm">
                tertiary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--tertiary">tertiary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--tertiary dc-btn--lg">
                tertiary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--green dc-btn--sm">
                green small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--green">green</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--green dc-btn--lg">
                green large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--grey dc-btn--sm">
                grey small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--grey">grey</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--grey dc-btn--lg">
                grey large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--red dc-btn--sm">
                red small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--red">red</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--red dc-btn--lg">
                red large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--purple dc-btn--sm">
                purple small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--purple">purple</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--purple dc-btn--lg">
                purple large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--sm">
                shadowed small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed">shadowed</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--lg">
                shadowed large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white dc-btn--sm">
                shadowed white small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white">
                shadowed white
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white dc-btn--lg">
                shadowed white large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white dc-btn--sm">
                shadowed white-green small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white">
                shadowed white-green
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white dc-btn--lg">
                shadowed white-green large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white dc-btn--sm">
                shadowed white-red small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white">
                shadowed white-red
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white dc-btn--lg">
                shadowed white-red large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--white dc-btn--sm">
                white small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--white">white</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--white dc-btn--lg">
                white large
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  })
  .add('card', () => (
    <>
      <div class="dc-card dc-u-m-24">Card</div>
      <div class="dc-card dc-card--bordered dc-u-m-24">Card with border</div>
      <div class="dc-card dc-card--shadowed-sm dc-u-m-24">
        Card with small shadow
      </div>
      <div class="dc-card dc-card--shadowed-lg dc-u-m-24">
        Card with large shadow
      </div>
      <div class="dc-card dc-card--shadowed-xl dc-u-m-24">
        Card with extra large shadow
      </div>
      <div class="dc-card dc-card--sectioned dc-u-m-24">
        <div class="dc-card__header">Header</div>
        <div class="dc-card__body">Body</div>
        <div class="dc-card__footer">Footer</div>
      </div>
    </>
  ));
