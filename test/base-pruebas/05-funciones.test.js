/* eslint-disable no-undef */
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en funcions', () => {
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Fernando';
        const objName = getUsuarioActivo(name);
        expect(objName).toEqual({uid:'ABC567',username: 'Fernando'});
    });
});