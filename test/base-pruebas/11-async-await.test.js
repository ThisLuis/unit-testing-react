import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Testeando Async Await', () => {

    test('La funcion getImagen debe de retornar una URL', async () => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url).toBe('string');
    });

})