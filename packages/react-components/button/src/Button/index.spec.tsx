import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import { AddCircleIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Button from '.';

describe('<Button />', () => {
  const someFunction = jest.fn();

  it('renders a button element containing the text', async () => {
    const exampleText = 'this is a button';
    const { container, getByText } = await axeRender(
      <Button onClick={someFunction}>{exampleText}</Button>
    );
    const buttonElement = container.firstChild as HTMLElement;
    expect(buttonElement.tagName).toEqual('BUTTON');
    expect(buttonElement).toContainElement(getByText(
      exampleText
    ) as HTMLElement);
  });

  it('sets the dataAttributes on the button element', async () => {
    const data = { test: 'example' };
    const { container } = await axeRender(
      <Button dataAttributes={data} onClick={someFunction}>
        button text
      </Button>
    );

    expect(container.firstChild).toHaveAttribute('data-test', 'example');
  });

  it('sets className on the button element', async () => {
    const testClass = 'test-className';
    const { container } = await axeRender(
      <Button className={testClass} onClick={someFunction}>
        button text
      </Button>
    );

    expect(container.firstChild).toHaveClass(testClass);
  });

  it('sets the ariaLabel on the button element', async () => {
    const exempleAriaLabel = 'add button';
    const { container } = await axeRender(
      <Button ariaLabel={exempleAriaLabel} onClick={someFunction}>
        button text
      </Button>
    );

    expect(container.firstChild).toHaveAttribute('aria-label', 'add button');
  });

  it('calls the function on click', async () => {
    const { getByText } = await axeRender(
      <Button onClick={someFunction}>click me</Button>
    );
    userEvent.click(getByText('click me') as HTMLElement);

    expect(someFunction).toHaveBeenCalledTimes(1);
  });

  it('renders the disabled property', async () => {
    const { container } = await axeRender(
      <Button onClick={someFunction} disabled>
        disabled button
      </Button>
    );

    const buttonElement = container.firstChild;

    expect(buttonElement).toHaveAttribute('disabled');
  });

  describe('button size', () => {
    it('renders the small button for the size="small" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button onClick={someFunction} size="small">
          btn small
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('btn small')).toHaveStyle(`line-height: 36px`);
    });

    it('renders the medium button for the size="medium" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button onClick={someFunction} size="medium">
          btn medium
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('btn medium')).toHaveStyle(`line-height: 48px`);
    });

    it('renders the large button for the size="large" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button onClick={someFunction} size="large">
          large btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 32px;`);
      expect(queryByText('large btn')).toHaveStyle(`font-size: 20px`);
      expect(queryByText('large btn')).toHaveStyle(`line-height: 64px`);
    });

    it('renders the medium size if no size props is specified', async () => {
      const { queryByText, container } = await axeRender(
        <Button onClick={someFunction}>default size btn</Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('default size btn')).toHaveStyle(`line-height: 48px`);
    });
  });

  describe('primary button color', () => {
    it('renders a blue button for the appearance="primary" and intent="neutral', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="neutral" onClick={someFunction}>
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: tokens.color.opaque.primary.value.rgb`
      );
    });

    it('renders a red button for the appearance="primary" and intent="danger', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="danger" onClick={someFunction}>
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.red.value.hex}`
      );
    });

    it('renders an orange button for the appearance="primary" and intent="warning', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="warning" onClick={someFunction}>
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.orange.value.hex}`
      );
    });

    it('renders a yellow button for the appearance="primary" and intent="cta', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="cta" onClick={someFunction}>
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.secondary.value.hex}`
      );
    });

    it('renders a green button for the appearance="primary" and intent="success', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="success" onClick={someFunction}>
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.green.value.rgb}`
      );
    });
  });

  describe(' default button color', () => {
    it('renders a blue outline button for the intent="neutral', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="neutral" onClick={someFunction}>
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.primary.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a red outline button for the intent="danger', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="danger" onClick={someFunction}>
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.red.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders an orange outline button for the intent="warning', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="warning" onClick={someFunction}>
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.orange.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a green outline button for the intent="success', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="success" onClick={someFunction}>
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.green.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });
  });

  describe('isLoading', () => {
    it('renders a spinner when the prop "isLoading" is passed to the button', async () => {
      const { container, getByText, getByTitle } = await render(
        <Button onClick={someFunction} isLoading>
          btn loading
        </Button>
      );

      const buttonElement = container.firstChild;
      const spinnerElement = getByTitle('Spinner') as HTMLElement;
      expect(buttonElement).toContainElement(spinnerElement);
      expect(getByText('btn loading') as HTMLElement).toHaveStyle(
        `color: transparent`
      );
    });

    it('renders a dark spinner when the appearance="default" (or undefined)', async () => {
      const { container } = await render(
        <Button onClick={someFunction} isLoading>
          Loading
        </Button>
      );

      const spinnerElement = container.querySelector('g');

      expect(spinnerElement).toHaveAttribute('fill', '#3D4251');
    });

    it('renders a white spinner when the appearance="primary"', async () => {
      const { container } = await render(
        <Button appearance="primary" onClick={someFunction} isLoading>
          Loading
        </Button>
      );

      const spinnerElement = container.querySelector('g');

      expect(spinnerElement).toHaveAttribute('fill', '#ffffff');
    });
  });

  describe('Single icon', () => {
    it('renders a single icon as a child', async () => {
      const { container, getByTitle } = await render(
        <Button ariaLabel="add" onClick={someFunction}>
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      const iconElement = getByTitle('Add') as HTMLElement;
      expect(buttonElement).toContainElement(iconElement);
    });

    it('renders a small squared button when it has icon as a child and size="small"', async () => {
      const { container } = await render(
        <Button ariaLabel="add" onClick={someFunction} size="small">
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`height: 38px, width: 38px `);
    });

    it('renders a medium squared button when it has icon as a child and size="medium" or is undefined ', async () => {
      const { container } = await render(
        <Button ariaLabel="add" onClick={someFunction}>
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`height: 50px, width: 50px `);
    });

    it('renders a large squared button when it has icon as a child and size="large" ', async () => {
      const { container } = await render(
        <Button ariaLabel="add" onClick={someFunction} size="large">
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`height: 6px, width: 66px `);
    });

    it('renders the disabled property', async () => {
      const { container } = await axeRender(
        <Button ariaLabel="add" onClick={someFunction} disabled>
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveAttribute('disabled');
    });

    it('renders a blue button for the appearance="primary" and intent="neutral', async () => {
      const { container } = await axeRender(
        <Button
          appearance="primary"
          ariaLabel="add"
          intent="neutral"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.primary.value.hex}`
      );
    });

    it('renders a red button for the appearance="primary" and intent="danger', async () => {
      const { container } = await axeRender(
        <Button
          appearance="primary"
          ariaLabel="add"
          intent="danger"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.red.value.hex}`
      );
    });

    it('renders an orange button for the appearance="primary" and intent="warning', async () => {
      const { container } = await axeRender(
        <Button
          appearance="primary"
          ariaLabel="add"
          intent="warning"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.orange.value.hex}`
      );
    });

    it('renders a green button for the appearance="primary" and intent="success', async () => {
      const { container } = await axeRender(
        <Button
          appearance="primary"
          ariaLabel="add"
          intent="success"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: ${tokens.color.opaque.green.value.hex}`
      );
    });

    it('renders a blue outline button for the intent="neutral', async () => {
      const { container } = await axeRender(
        <Button
          appearance="default"
          ariaLabel="add"
          intent="neutral"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.primary.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a red outline button for the intent="danger', async () => {
      const { container } = await axeRender(
        <Button
          appearance="default"
          ariaLabel="add"
          intent="danger"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.red.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders an orange outline button for the intent="warning', async () => {
      const { container } = await axeRender(
        <Button
          appearance="default"
          ariaLabel="add"
          intent="warning"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.orange.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a green outline button for the intent="success', async () => {
      const { container } = await axeRender(
        <Button
          appearance="default"
          ariaLabel="add"
          intent="success"
          onClick={someFunction}
        >
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(
        `box-shadow: inset 0 0 0 1px ${tokens.color.opaque.green.value.hex}`
      );
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });
  });

  describe('Icon and text', () => {
    it('renders an icon and a string as children', async () => {
      const { container, getByText, getByTitle } = await render(
        <Button onClick={someFunction}>
          TestText
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      const iconElement = getByTitle('Add') as HTMLElement;
      expect(buttonElement).toContainElement(iconElement);
      expect(buttonElement).toContainElement(getByText('TestText'));
    });

    it("doesn't add padding to the top and bottom ", async () => {
      const { container } = await render(
        <Button onClick={someFunction}>
          TestText
          <AddCircleIcon />
        </Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`padding-top: 0, padding-bottom: 0`);
    });

    it('the text has a margin on the right if it is the first child', async () => {
      const { getByText } = await render(
        <Button onClick={someFunction}>
          TestText
          <AddCircleIcon />
        </Button>
      );

      expect(getByText('TestText')).toHaveStyle(`marginRight: 10px`);
    });

    it('the text has a margin on the left if it is not the first child', async () => {
      const { getByText } = await render(
        <Button onClick={someFunction}>
          <AddCircleIcon />
          TestText
        </Button>
      );

      expect(getByText('TestText')).toHaveStyle(`marginLeft: 10px`);
    });
  });

  describe('href and target props', () => {
    it('renders an "<a> </a>" tag if type=link', async () => {
      const { container } = await axeRender(
        <Button href="https://www.google.com" type="link">
          Link
        </Button>
      );
      const buttonElement = container.firstChild as HTMLElement;

      expect(buttonElement.tagName).toEqual('A');
      expect(buttonElement).toHaveAttribute('href', 'https://www.google.com');
    });

    it('assigns the "target" prop to the target attribute', async () => {
      const { container } = await axeRender(
        <Button href="https://www.google.com" target="_blank" type="link">
          Link
        </Button>
      );
      const buttonElement = container.firstChild as HTMLElement;

      expect(buttonElement).toHaveAttribute('target', '_blank');
    });
  });

  describe('href and target props', () => {
    it('renders a button type="submit" if type="submit"', async () => {
      const { container } = await axeRender(
        <Button type="submit">Submit</Button>
      );
      const buttonElement = container.firstChild as HTMLElement;

      expect(buttonElement).toHaveAttribute('type', 'submit');
    });
  });

  describe('snapshots', () => {
    const exampleText = 'this is a button';

    const buttonSizes: ('small' | 'medium' | 'large')[] = [
      'small',
      'medium',
      'large',
    ];
    const isLoadings: boolean[] = [true, false];
    buttonSizes.forEach(size => {
      (['neutral', 'warning', 'danger', 'success'] as (
        | 'neutral'
        | 'warning'
        | 'danger'
        | 'success')[]).forEach(intent => {
        isLoadings.forEach(isLoading => {
          it(`renders a button with appearance default, intent ${intent}, size ${size} and isLoading ${isLoading}`, async () => {
            const { container } = await axeRender(
              <Button
                appearance="default"
                intent={intent}
                isLoading={isLoading}
                onClick={someFunction}
                size={size}
              >
                {exampleText}
              </Button>
            );
            expect(container.firstChild).toMatchSnapshot();
          });
        });
      });
    });

    buttonSizes.forEach(size => {
      (['cta', 'neutral', 'warning', 'danger', 'success'] as (
        | 'cta'
        | 'neutral'
        | 'warning'
        | 'danger'
        | 'success')[]).forEach(intent => {
        isLoadings.forEach(isLoading => {
          it(`renders a button with appearance primary, intent ${intent}, size ${size} and isLoading ${isLoading}`, async () => {
            const { container } = await axeRender(
              <Button
                appearance="primary"
                intent={intent}
                isLoading={isLoading}
                onClick={someFunction}
                size={size}
              >
                {exampleText}
              </Button>
            );
            expect(container.firstChild).toMatchSnapshot();
          });
        });
      });
    });

    it(`renders a squared button with a single icon`, async () => {
      const { container } = await axeRender(
        <Button ariaLabel="add" onClick={someFunction}>
          <AddCircleIcon />
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});