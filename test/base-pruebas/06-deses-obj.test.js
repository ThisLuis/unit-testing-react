/* eslint-disable no-undef */
import { usContext } from '../../src/base-pruebas/06-deses-obj';
describe('Pruebas en deses-obj.js', () => {
    test('Debe de retornar un objeto', () => {

        const clave = 'thor';
        const edad = 1000;
        const nameObj = usContext({clave, edad});
        console.log(nameObj)
        expect({
            clave: 'thor',
            edad: 1000,
            latlng: { lat: 14.1232, lng: -12.3232 }
          }).toEqual(nameObj)
    });
});