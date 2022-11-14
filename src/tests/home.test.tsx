// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { describe, expect, it } from 'vitest';
import { storageMock } from './storage.mock';
import { render, screen, userEvent } from '../../test-utils';

import App from '../App';
// Setting up based article: https://www.linkedin.com/pulse/setting-up-rtl-vite-react-project-william-ku/

describe('Home', () => {
  describe('Header', () => {
    it('should be possible view header', () => {
      const { getAllByText } = render(<App />);
      const header = getAllByText('Estoque');
      expect(header.length).toBe(1);
    });
    it('should be possible click in search icon', async () => {
      const { container } = render(<App />);
      const header = container.querySelector('header');
      const button = header?.querySelectorAll('button')[1];
      await userEvent.click(button);
      const searchbox = container.querySelector('input[type="text"]');
      expect(searchbox).toBeInTheDocument();
    });
  });
  describe('Product List', async () => {
    beforeAll(() => {
      global.Storage.prototype.getItem = vitest.fn((key) => storageMock[key]);
    });

    it('should be possible view all products in the list', async () => {
      const { container } = render(<App />);
      const productList = container.querySelector('main');
      const allItems = productList?.childElementCount;
      expect(allItems).toBe(11);
    });

    it('should be possible view product info', async () => {
      const { container, getByText } = render(<App />);
      const productList = container.querySelector('main');
      const firstItem = productList?.children[0];
      await userEvent.click(firstItem);
      const price = getByText('R$ 5.00');
      const categories = getByText('bebida, café');
      expect(price).toBeInTheDocument();
      expect(categories).toBeInTheDocument();
    });

    it.only('should be possible close product details', async () => {
      const { container } = render(<App />);
      const productList = container.querySelector('main');
      const firstItem = productList?.children[0];
      await userEvent.click(firstItem);
      const closeModalBtn = container.querySelector('.close-modal');
      await userEvent.click(closeModalBtn);
      expect(closeModalBtn).not.toBeInTheDocument();
    });
  });
});
