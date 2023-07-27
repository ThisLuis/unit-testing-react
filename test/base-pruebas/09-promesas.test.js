import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe  => {
                // Pasa el test porque el codigo se ejecuta en secuencia, por un segundo la promesa "pasa" pero no espera a que sea resuelta, para ello podemos decirle a jest que espere hasta que se ejecute con done(), si nunca mandamos el done se va a quedar esperando
                // done: espera a que el codigo termine
                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
    });
    test('getHeroeByIdAsync debe de retornar un error si heroe no existe', ( done ) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBeFalsy();
                done();
            } )
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)
                done()
            });
    });
});