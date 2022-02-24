import { updateTask } from './updateTask';

describe('Validación de función updateTask', () => {

    test('Actualización de datos del endpoint updateTask con body', async () => {
        const task = {
            id: 'd13fa57a-40d0-47e2-95b4-4efe6e2c6005',
            title: 'Tarea 1',
            index: 1,
            done: true
        }
        const updatedData = await updateTask(task);
        expect(updatedData.id).toBe(task.id);
    });

    test('Devolución de error de función updateTask con body = null', async () => {
        const updatedData = await updateTask();
        expect(updatedData).toBeNull();
    });

    test('Devolución de error del endpoint updateTask con body.id = null', async () => {
        const task = {
            id: null,
            title: 'Tarea 1',
            index: 1,
            done: true
        }
        const updatedData = await updateTask(task);
        expect(updatedData).toBeNull();
    });

    test('Devolución de error del endpoint updateTask con body.id = undefined', async () => {
        const task = {
            title: 'Tarea 1',
            index: 1,
            done: true
        }
        const updatedData = await updateTask(task);
        expect(updatedData).toBeNull();
    });

});