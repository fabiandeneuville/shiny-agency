import Home from './index';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {
    it('should render without crash and render title', () => {
        render (
            <BrowserRouter>
                <ThemeProvider>
                    <Home/>
                </ThemeProvider>
            </BrowserRouter>
        )
        // expect(screen.getByText('Repérez vos besoins, on s\'occupe du reste, avec les meilleurs talents')).toBeTruthy()
        expect(screen.getByRole('heading', {level: 1, text: 'Repérez vos besoins, on s\'occupe du reste, avec les meilleurs talents'})).toBeTruthy()
    })
})