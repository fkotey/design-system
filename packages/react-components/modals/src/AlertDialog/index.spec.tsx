import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import { setAppElement } from '..';
import AlertDialog from '.';

describe('<AlertModal />', () => {
  const baseContainer = document.createElement('div');
  setAppElement(baseContainer);
  const getRenderOptions = (): RenderOptions => ({
    baseElement: document.body,
    container: document.body.appendChild(baseContainer),
  });

  describe('isOpen', () => {
    it('renders the modal via a portal when true', async () => {
      const { baseElement, container, getByRole, getByText } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      expect(container).toHaveAttribute('aria-hidden', 'true'); // app gets hidden when open

      const modalElement = getByRole('dialog');
      expect(modalElement).toContainElement(
        getByText('test title') as HTMLElement,
      );
      expect(modalElement).toContainElement(
        getByText('test description') as HTMLElement,
      );
      expect(baseElement).toMatchSnapshot();
    });

    it('mounts nothing when false', async () => {
      const { baseElement, container, queryByRole } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen={false}
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      expect(container).not.toHaveAttribute('aria-hidden', 'true'); // app is interactive when hidden
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('confirmation', () => {
    it('uses a confirm button by default', async () => {
      const onConfirm = jest.fn();
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={() => {}}
          onConfirm={onConfirm}
          title="test title"
        />,
        getRenderOptions(),
      );
      const confirmationButton = getByText('Confirm') as HTMLElement;
      userEvent.click(confirmationButton);

      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('uses a custom confirm button', async () => {
      const onConfirm = jest.fn();
      const confirmButtonText = 'test confirm button';
      const { getByText } = await axeRender(
        <AlertDialog
          confirmButtonText={confirmButtonText}
          description="test description"
          isOpen
          onClose={() => {}}
          onConfirm={onConfirm}
          title="test title"
        />,
        getRenderOptions(),
      );
      const confirmationButton = getByText(confirmButtonText) as HTMLElement;
      userEvent.click(confirmationButton);

      expect(onConfirm).toHaveBeenCalledTimes(1);
    });
  });

  describe('closing', () => {
    it('closes when clicking the X button', async () => {
      const onClose = jest.fn();

      const { getByTitle } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const closeButton = getByTitle('Cross') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('closeButton');
    });

    it('closes when clicking the Cancel button with default text', async () => {
      const onClose = jest.fn();

      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const closeButton = getByText('Cancel') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('cancelButton');
    });

    it('closes when clicking the Cancel button with custom text', async () => {
      const onClose = jest.fn();
      const cancelButtonText = 'cancel button text';
      const { getByText } = await axeRender(
        <AlertDialog
          cancelButtonText={cancelButtonText}
          description="test description"
          isOpen
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const closeButton = getByText(cancelButtonText) as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('cancelButton');
    });

    it('closes when clicking the background overlay', async () => {
      const onClose = jest.fn();
      const { baseElement } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      // need to use querySelector since there is no real content/label for the background
      const backgroundOverlayElement = baseElement.querySelector(
        '.modal-overlay',
      ) as HTMLElement;

      userEvent.click(backgroundOverlayElement);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('overlayClick');
    });

    it('closes when clicking escape', async () => {
      const onClose = jest.fn();
      const { getByRole } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const dialogElement = getByRole('dialog') as HTMLElement;

      fireEvent.keyDown(dialogElement, {
        key: 'ESC',
        keyCode: 27,
      });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('escKey');
    });
  });

  describe('loading', () => {
    it('renders a loading confirm button when loading', async () => {
      const { getByText, getByTitle } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          loading
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');

      const spinnerElement = getByTitle('Spinner') as HTMLElement;
      expect(confirmButtonElement).toContainElement(spinnerElement);
    });

    it('disables the X button when loading', async () => {
      const onClose = jest.fn();

      const { getByTitle } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          loading
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const closeButton = getByTitle('Cross') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("doesn't close when clicking the Cancel button if loading", async () => {
      const onClose = jest.fn();

      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          loading
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const closeButton = getByText('Cancel') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("doesn't close when clicking the background overlay if loading", async () => {
      const onClose = jest.fn();
      const { baseElement } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          loading
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      // need to use querySelector since there is no real content/label for the background
      const backgroundOverlayElement = baseElement.querySelector(
        '.modal-overlay',
      ) as HTMLElement;

      userEvent.click(backgroundOverlayElement);
      expect(onClose).not.toHaveBeenCalled();
    });

    it("doesn't close when clicking escape if loading", async () => {
      const onClose = jest.fn();
      const { getByRole } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          loading
          onClose={onClose}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );

      const dialogElement = getByRole('dialog') as HTMLElement;

      fireEvent.keyDown(dialogElement, {
        key: 'ESC',
        keyCode: 27,
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('intent', () => {
    it('renders a neutral intent by default', async () => {
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );
      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');
      expect(confirmButtonElement).toHaveFocus();
      expect(confirmButtonElement).toHaveStyle(
        `background-color: ${tokens.color.primary.navy.value.rgb}`,
      );
    });

    it('renders a neutral intent', async () => {
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          intent="neutral"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );
      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');
      expect(confirmButtonElement).toHaveFocus();
      expect(confirmButtonElement).toHaveStyle(
        `background-color: ${tokens.color.primary.navy.value.rgb}`,
      );
    });

    it('renders a success intent', async () => {
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          intent="success"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );
      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');
      expect(confirmButtonElement).toHaveFocus();
      expect(confirmButtonElement).toHaveStyle(
        `background-color: ${tokens.color.primary.green.value.rgb}`,
      );
    });

    it('renders a warning intent', async () => {
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          intent="warning"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );
      const cancelButtonElement = (getByText('Cancel') as HTMLElement).closest(
        'button',
      );
      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');
      expect(cancelButtonElement).toHaveFocus();
      expect(confirmButtonElement).toHaveStyle(
        `background-color: ${tokens.color.primary.orange.value.rgb}`,
      );
    });

    it('renders a danger intent', async () => {
      const { getByText } = await axeRender(
        <AlertDialog
          description="test description"
          intent="danger"
          isOpen
          onClose={() => {}}
          onConfirm={() => {}}
          title="test title"
        />,
        getRenderOptions(),
      );
      const cancelButtonElement = (getByText('Cancel') as HTMLElement).closest(
        'button',
      );
      const confirmButtonElement = (getByText(
        'Confirm',
      ) as HTMLElement).closest('button');
      expect(cancelButtonElement).toHaveFocus();
      expect(confirmButtonElement).toHaveStyle(
        `background-color: ${tokens.color.primary.red.value.rgb}`,
      );
    });
  });
});
