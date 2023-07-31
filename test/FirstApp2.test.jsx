import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    const title    = 'Hola, soy un test';
    const subTitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snap', () => {
        const { container } = render(<FirstApp title={ title }/>)
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje Hola, soy un test', () => {
        render(<FirstApp title={ title } />);
        // el objeto screen muestra lo que se a renderizado con la funcion render, en este caso el componente, y podemos acceder a los metodos de la misma manera
        expect( screen.getByText(title)).toBeTruthy()
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={ title } />);
        // obtener por role, es basicamente elementos html
        expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length).toBe(2);
    });
})