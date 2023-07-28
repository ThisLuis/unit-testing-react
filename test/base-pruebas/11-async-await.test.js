import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Testeando Async Await', () => {

    test('La funcion getImagen debe de retornar una URL', async () => {
        const resp = await getImagen();
        expect(resp).toBe('No se pudo obtener una url valida');
    });

})