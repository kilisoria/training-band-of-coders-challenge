import React from 'react';
import { render, screen } from '@testing-library/react';

import TasksPage from '../../pages/tasks';

describe('tasks', () => {
  it('should render without crashing', async () => {
    render(<TasksPage />);

    expect(screen.getByTestId('tasks')).toBeInTheDocument();
    expect(screen.getByTestId('tasks-title')).toBeInTheDocument();
    expect(screen.getByTestId('tasks-text')).toBeInTheDocument();
  });
});
