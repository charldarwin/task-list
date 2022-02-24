import { render, screen } from '@testing-library/react';
import App from './App';

test('Visualización del componente principal por título', () => {
  render(<App />);
  const titleText = screen.getByText(/Listado de tareas/i);
  expect(titleText).toBeInTheDocument();
});
