import { getTasks } from './getTasks';

describe('Validación de función getTasks', () => {

    test('Obtención de datos del endpoint getTasks por defecto', async () => {
        const getData = await getTasks();
        expect(getData.length).toBe(3);
    });

    test('Obtención de datos del endpoint getTasks con cantidad seteada', async () => {
        const quantity = 5;
        const getData = await getTasks(quantity);
        expect(getData.length).toBe(quantity);
    });

    test('Devolución de error del endpoint getTasks por envío de string', async () => {
        const quantity = "cinco";
        const getData = await getTasks(quantity);
        expect(getData.length).toBe(0);
    });

});