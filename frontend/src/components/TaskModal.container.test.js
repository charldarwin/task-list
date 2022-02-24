import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TaskModalContainer from './TaskModal.container';

describe('Validación del container TaskModal', () => {

    const task = {
        id: 'd13fa57a-40d0-47e2-95b4-4efe6e2c6005',
        title: 'Tarea 1',
        index: 1,
        done: false
    }

    test('Visualización de modal mediante task enviada por props', () => {
        render(<TaskModalContainer taskSelected={task} setTaskSelected={()=>{}} setTasks={()=>{}} />);
        const titleText = screen.getByText(task.title);
        expect(titleText).toBeInTheDocument();
    });

    test('No visualización de modal al enviar null en taskSelected', () => {
        render(<TaskModalContainer taskSelected={null} setTaskSelected={()=>{}} setTasks={()=>{}} />);
        const titleText = screen.queryByText(task.title);
        expect(titleText).toBeNull();
    });

    test('Cerrar modal al hacer clic en botón cerrar', () => {
        render(<TaskModalContainer taskSelected={task} setTaskSelected={()=>{}} setTasks={()=>{}} />);
        expect(screen.getByText(task.title)).toBeInTheDocument();
        userEvent.click(screen.getByText('Cerrar'));
        expect(screen.queryByText(task.title)).toBeNull();
    });

});