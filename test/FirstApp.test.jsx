import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshopt', () => {

        const title = 'Hola, soy un test';
        const { container } = render(<FirstApp title={ title} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, soy un test';
        const { container, getByText } = render(<FirstApp title={ title} />);
        expect( getByText(title)).toBeTruthy();

        // Verificar que se encuentre dentro de un h1
        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain(title);
    });
})