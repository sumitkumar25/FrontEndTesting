// 1. nothing
// 2. toBe
// 3. toBeCloseTo(expected, precisionopt)
// 4. toBeDefined
// 5. toBeFalsy
// 6. toBeGreaterThan
// 7. toBeGreaterThanOrEqual
// 8. toBeLessThan
// 9. toBeLessThanOrEqual
// 10. toBeNaN
// 11. toBeNegativeInfinity
// 12. toBeNull
// 13. toBePositiveInfinity
// 14. toBeTruthy
// 15. toBeUndefined
// 16. toContain
// 17. toEqual
// 18. toHaveBeenCalled
// 19. toHaveBeenCalledBefore.
// 20. toHaveBeenCalledTimes.
// 21. toHaveBeenCalledWith
// 22. toMatch
// 24. toThrow
// 25. toThrowError
// var Deck = require('../globals/global');
describe('Jasmine Matchers', () => {
    var testDeck = testDeck = new Deck();
    it('should create deck', () => {
        expect(testDeck).toBeTruthy();
    });
});