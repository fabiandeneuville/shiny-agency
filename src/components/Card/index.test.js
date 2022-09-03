import Card from './index';
import { ThemeProvider } from '../../utils/context/index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Card component', () => {
    it('should render without crash', () => {
        render (
            <ThemeProvider>
                <Card
                title="testTitle"
                picture="testPicture"
                label="testLabel"
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText('testTitle')
        const cardLabel = screen.getByText('testLabel')
        expect(cardPicture.src).toBe('http://localhost/testPicture')
        expect(cardTitle.textContent).toBe(' testTitle ')
        expect(cardLabel.textContent).toBe('testLabel')
    })
    it('should add ⭐️ around title', async () => {
        render (
            <ThemeProvider>
                <Card
                title="testTitle"
                picture="testPicture"
                label="testLabel"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText('testTitle')
        const cardWrapper = cardTitle.closest('div')
        fireEvent.click(cardWrapper)
        expect(cardTitle.textContent).toBe('⭐️ testTitle ⭐️')
    })
})

