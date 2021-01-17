import React from 'react';
import { render, screen } from '@testing-library/react';
import UserView from './UserView.component';

test('renders learn react link', () => {
    render(<UserView />);
    //   const linkElement = screen.getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
});