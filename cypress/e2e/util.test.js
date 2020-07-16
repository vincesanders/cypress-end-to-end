import { factorial } from '../../src/util';

describe('testing factorial function', () => {
    
    it('factoral of 4 is 24', () => {
        expect(factorial(4)).to.equal(24);
    })
})