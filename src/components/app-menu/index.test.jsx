import React from 'react';
import { render } from '@testing-library/react';

import { I18nMock } from '../../i18n/mock';
import { AppMenu } from './index';

describe('AppMenu component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AppMenu />, {
      wrapper: I18nMock
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component', async () => {
    const { getByTestId, getByText } = render(<AppMenu />, {
      wrapper: I18nMock
    });
    expect(getByTestId('menu').innerHTML).toBeDefined();
    expect(getByText('Home').innerHTML).toBeDefined();
  });
});
