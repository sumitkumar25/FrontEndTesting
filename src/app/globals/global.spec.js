// ## Global
// 1. afterAll
// 2. afterEach
// 3. beforeAll
// 4. beforeEach
// 5. describe
// 6. expect
// 7. fail
// 8. fdescribe
// 9. fit
// 10. it
// 11. pending
// 12. spyOn - in spies
// 14. xdescribe
// 14. xit
// var Deck = require('./global');
describe('Jasmine Globals', () => {
    var testDeck = new Deck();
    it('should create deck', () => {
        expect(testDeck).toBeTruthy();
    });


});