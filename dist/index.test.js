"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert = require('assert');
const evaluate = require('.');
describe('Calculator', () => {
    it('should calculate add expression', () => {
        // arrange
        const result = evaluate('1+1');
        // act
        // arrange
        assert.equal(result, 2);
    });
    it('should calculate subtract expression', () => {
        // arrange
        const result = evaluate('1-1');
        // act
        // arrange
        assert.equal(result, 0);
    });
    it('should calculate multiply expression', () => {
        // arrange
        const result = evaluate('5*5');
        // act
        // arrange
        assert.equal(result, 25);
    });
    it('should calculate division expression', () => {
        // arrange
        const result = evaluate('5/5');
        // act
        // arrange
        assert.equal(result, 1);
    });
    it('should throw exception when operation is undefined (like division by zero)', () => {
        // arrange
        const result = evaluate('5/0');
        // act
        // arrange
        assert.equal(result, 'cannot divide by 0');
    });
    it('should throw exception when expression is not recognized (like not a mathematical expression)', () => {
        // arrange
        const result = evaluate('1x1');
        // act
        // arrange
        assert.equal(result, 'cannot do that');
    });
    it('should handle spaces in expression (like any of the following expressions are ok: "a+b", "a + b", "a    + b")', () => {
        // arrange
        const result1 = evaluate('5+5');
        const result2 = evaluate('5 + 5');
        const result3 = evaluate('5    + 5');
        // act
        // arrange
        assert.equal(result1, 10);
        assert.equal(result2, 10);
        assert.equal(result3, 10);
    });
    it('should should reject sums with multiple operators', () => {
        // arrange
        const result = evaluate('1+1-1');
        // act
        // arrange
        assert.equal(result, 'cannot do that');
    });
});
//# sourceMappingURL=index.test.js.map