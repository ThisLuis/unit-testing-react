import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Probando 08-imp-exp', () => {
    test('Debe retornar un heroe por ID si existe', () => {
        const heroe = getHeroeById(100);
        // expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

        // Evaluar que sea null, undefined o false
        expect( heroe ).toBeFalsy();
    });

    test('Retornar los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        console.log(heroes);
        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual([{ id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }]);

        // Esta seria una mejor manera dinamica de hacer el espect
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
    });

    test('Retorna un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        console.log(heroes)
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]
      );
    })
});