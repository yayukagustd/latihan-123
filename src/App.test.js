import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main elements', () => {
  render(<App />);
  const headerElement = screen.getByText(/CV PANGAN BERKAH SENTOSA/i);
  expect(headerElement).toBeInTheDocument();
  const buttonElement = screen.getByText(/Catalogue/i);
  expect(buttonElement).toBeInTheDocument();
});