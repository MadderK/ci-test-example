
const add = require('../app');
const { expect } = require('chai');

describe('Add function', () => {
    it('should return 5 when adding 2 and 3', () => {
        expect(add(2, 3)).to.equal(5);
    });
});
