import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Total Number of Animals in Each Country/i);
  expect(linkElement).toBeInTheDocument();
});
