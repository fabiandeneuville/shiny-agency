import { formatJobList  } from './';
import { formatQueryParams } from './';

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