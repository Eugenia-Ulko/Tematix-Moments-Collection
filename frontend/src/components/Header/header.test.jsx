import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Header from './header';

describe('Given a Header component', () => {
  describe('when is rendered', () => {
    beforeEach(() => {
      render(
        <Header />
      );
    });
    /* test('Cart icon should be in the document', () => {
      expect(screen.getByTestId('icon-cart')).toBeInTheDocument(); */
    test.only('Then should have a button with data-id "cart-button-link"', () => {
      expect(screen.getByTestId('cart-button-link')).toBeInTheDocument();
    });
  });
});
