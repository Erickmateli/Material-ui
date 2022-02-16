import { render, screen } from '@testing-library/react';
import App from './App';

test('Connect with the right Service Experts', () => {
  render(<App />);
  const linkElement = screen.getByText(/Connect with the right Service Experts/i);
  expect(linkElement).toBeInTheDocument();
});
