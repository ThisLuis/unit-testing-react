/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent>', () => {
	test('Esta prueba no debe fallar', () => {
		// 1. Inicializacion
		const msg1 = 'Hola mundo';
	
		// 2. Estimulo
		const msg2 = msg1.trim();
	
		// 3. Observar el comportamiento esperado
		expect(msg1).toBe(msg2);
	});
})