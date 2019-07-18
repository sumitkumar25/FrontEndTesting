function Deck() {
    this.deck = [];
    this.customProperties = null;
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (var suit in suits) {
        for (var value in values) {
            this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
    }
}

Deck.prototype.getCards = function (number) {
    return Array.prototype.splice.call(
        this.deck, Math.floor(Math.random() * Math.floor(this.deck.length)), number = number ? number : 1
    );
}

Deck.prototype.remainingCards = function () {
    return this.deck.length;
}

Deck.prototype.getProp = function (key) {
    var res;
    try {
        res = this.customProperties[key];
    } catch (e) {
        throw ('custom error')
    }
    return res;
}

// module.exports = Deck
