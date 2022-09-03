import { formatJobList , formatQueryParams} from './';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '../../utils/test/index';

import Results from './index';

describe('testing the formatJobList function', () => {
    it('should add comma after an item that is not last on the list', () => {
        expect(formatJobList('item2', 3, 1)).toEqual('item2,')
    })
    it('should not add comma after the last item of the list', () => {
        expect(formatJobList('item3', 3, 2)).toEqual('item3')
    })
})

describe('testing the formatQueryParams function', () => {
    it('should return a proper string with proper format', () => {
        expect(formatQueryParams({1: 'answer1'})).toEqual('a1=answer1')
    })
    it('should add & as separator between query params', () => {
        expect(formatQueryParams({1: 'answer1', 2: 'answer2'})).toBe('a1=answer1&a2=answer2')
    })
})

const ResultsMockedData = [
    {
        title: 'SEO',
        description: 'description 1'
    },
    {
        title: 'Back Office',
        description: 'description 2'
    }
]

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({resultsData: ResultsMockedData}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display results after the data are loaded', async () => {
    render(<Results/>)
    expect(screen.getByTestId('loader')).toBeTruthy()
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    await waitFor(() => {
        // expect(screen.getByText('title 1')).toBeTruthy()
        // expect(screen.getByText('description 1')).toBeTruthy()
        // expect(screen.getByText('title 2')).toBeTruthy()
        // expect(screen.getByText('description 2')).toBeTruthy()
        const jobTitleElements = screen.getAllByTestId('job-title')
        const jobDescriptionElements = screen.getAllByTestId('job-description')
        expect(jobTitleElements.length).toBe(2)
        expect(jobTitleElements[0].textContent).toBe('SEO,')
        expect(jobDescriptionElements.length).toBe(2)
    })
})