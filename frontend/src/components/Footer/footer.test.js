import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './footer';

describe('Given a Footer component', () => {
  describe('When is rendered', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    test('Then Copyright &copy; Tematix Moments Collection should be in the document', () => {
      act(() => {
        render(<Footer />, container);
      });
      expect(container.querySelector('p').textContent).toBe('Tematix Moments Collection');
    });
    test('Then Copyright &copy; Tematix Moments Collection should be in the document', () => {
      act(() => {
        render(<Footer />, container);
      });
      expect(container.textContent).toBe('Copyright © Tematix Moments Collection');
    });
  });
});
