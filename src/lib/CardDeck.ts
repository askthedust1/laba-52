import Card from "./Card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    private readonly suits = [
        {suit: 'diams', pic: '♦'},
        {suit: 'hearts', pic: '♥'},
        {suit: 'clubs', pic: '♣'},
        {suit: 'spades', pic: '♠'}
    ];
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit.suit, suit.pic);
                this.deck.push(card);
            });
        });
    }

    getCard(): Card[] {
        let random = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(random, 1);
    }

    getCards(howMany: number): Card[] {
        const cards = [];
        let count = 0;

        while (count < howMany) {
            cards.push(this.getCard()[0]);
            count++;
        }
        return cards;
    }
}

export default CardDeck;