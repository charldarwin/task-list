import { render, screen } from '@testing-library/react';
import MainTitle from './MainTitle';

describe('Validación de componente MainTitle', () => {

    test('Visualización de string pasada por prop', () => {
        const title = 'Lista de tareas';
        render(<MainTitle title={title} />);
        const titleText = screen.getByText(title);
        expect(titleText).toBeInTheDocument();
    });
    
    test('Validación que el valor "null" no se muestre como string', () => {
        const title = null;
        render(<MainTitle title={title} />);
        const titleText = screen.queryByText('null');
        expect(titleText).toBeNull();
    });
    
    test('Si no se declara la prop no debe mostrarse el texto "undefined"', () => {
        render(<MainTitle />);
        const titleText = screen.queryByText('undefined');
        expect(titleText).toBeNull();
    });

});