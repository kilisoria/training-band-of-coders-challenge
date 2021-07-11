import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockUser } from '../fixtures';
import AboutPage from '../../pages/about';

describe('ssr', () => {
  it('should render without crashing', async () => {
    render(<AboutPage />);

    expect(screen.getByTestId('ssr')).toBeInTheDocument();
    expect(screen.getByTestId('ssr-title')).toBeInTheDocument();
    expect(screen.getByTestId('ssr-text')).toBeInTheDocument();
  });

  it('should render the user profile', async () => {
    render(<AboutPage user={mockUser} />);
  });
});
