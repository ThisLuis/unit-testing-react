/* eslint-disable no-undef */

import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en en template string', () => { 
    test('Debe de retornar Hola Luis', () => {
        const name = 'Luis';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
}); 