import { render, screen } from '@testing-library/react';
import ListComponent from './List.component';

const tasks = [
    {
        id: 'd13fa57a-40d0-47e2-95b4-4efe6e2c6005',
        title: 'Tarea 1',
        index: 1,
        done: false
    },
    {
        id: 'e31037c7-2178-4a21-a662-c0fb2cd4eda7',
        title: 'Tarea 2',
        index: 2,
        done: false
    },
    {
        id: 'ebe0a3c6-1861-4c0f-96d1-b84bada638db',
        title: 'Tarea 3',
        index: 3,
        done: false
    },
    {
        id: '59a519af-d855-45d5-8768-f0fd36dcfe09',
        title: 'Tarea 4',
        index: 4,
        done: false
    },
    {
        id: '51aa098f-8884-43da-b3be-9aaf0ca92d2f',
        title: 'Tarea 5',
        index: 5,
        done: false
    }            
];

describe('Validación de Componente de Listado', () => {

    test('Muestreo del componente Principal', () => {
        render(<ListComponent tasks={tasks} handleTask={()=>{}} />)    
        const tasksList = screen.getByTestId('list-component')
        expect(tasksList).toBeInTheDocument();
    });

    test('Muestreo de array completo de tasks', () => {
        render(<ListComponent tasks={tasks} handleTask={()=>{}} />);
        const taskItems = screen.getAllByRole('button');
        expect(taskItems.length).toEqual(tasks.length)
    });
    
});