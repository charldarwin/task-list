import { render, screen } from '@testing-library/react';
import ListContainer from './List.container';

describe('Validación del Container de Listado', () => {

    test('Muestreo de input quantity', () => {
        render(<ListContainer />);
        const inputQuantity = screen.getByTestId('quantity-component');
        expect(inputQuantity).toBeInTheDocument();
    });

});