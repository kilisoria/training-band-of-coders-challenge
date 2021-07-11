import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../../components/Home';

describe('Home', () => {
  it('should render without crashing', async () => {
    render(<Home />);

    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('hero-logo')).toBeInTheDocument();
    expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    expect(screen.getByTestId('hero-lead')).toBeInTheDocument();
  });
});
