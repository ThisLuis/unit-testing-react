import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {

    const value = 100;
    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={ value } />)
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value={ value } />)
        expect( screen.getByText(value)).toBeTruthy();
    });

    // simulacion de eventos
    // screen es el elemento reenderizado que tenemos actualmente
    test('debe de incrementar con el boton +1', () => {

        render(<CounterApp value={ initialValue }/>)
        fireEvent.click( screen.getByText('+1'));
        expect( screen.getByText('11')).toBeTruthy();

    });

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={ initialValue }/>)
        fireEvent.click( screen.getByText('-1'));
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp value={ initialValue }/>)
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));

        // fireEvent.click( screen.getByText('Reset'));
        // expect( screen.getByText(initialValue)).toBeTruthy();

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        expect( screen.getByText( initialValue)).toBeTruthy();
    });

})