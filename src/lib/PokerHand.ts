import Card from "./Card";

class PokerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
    getOutcome(): string {
        const ranksMap = this.cards.map(card => card.rank);
        const suitsMap = this.cards.map(card => card.suit);

        if (this.flush(suitsMap)) {
            return "Флэш";
        }

        if (this.threeOfKind(ranksMap)) {
            return "Тройка";
        }

        if (this.twoPairs(ranksMap)) {
            return "Две пары";
        }

        if (this.onePair(ranksMap)) {
            return "Одна пара";
        }

        return "Нет комбинаций";

    }

    onePair(ranksMap: string[]): boolean {
        for (let i = 0; i < ranksMap.length; i++) {
            for (let j = 0; j < ranksMap.length; j++) {
                if (i !== j) {
                    if (ranksMap[i] === ranksMap[j]) {
                        return true;
                    }
                }
            }
        }
            return false;
    }

    twoPairs(ranksMap: string[]): boolean {

        const duplicates = ranksMap.filter((item, index) => index !== ranksMap.indexOf(item));

        if (duplicates.length === 2) {
            return true;
        }

        return false;
    }

    threeOfKind(ranksMap: string[]): boolean {
        for (let i = 0; i < ranksMap.length; i++) {
            const currentRank = ranksMap[i];
            let count = 0;

            for (let j = 0; j < ranksMap.length; j++) {
                if (ranksMap[j] === currentRank) {
                    count++;
                }
            }

            if (count === 3) {
                return true;
            }
        }

        return false;
    }

    flush(suitsMap: string[]): boolean {
        const firstSuit = suitsMap[0];
        for (let i = 1; i < suitsMap.length; i++) {
            if (suitsMap[i] !== firstSuit) {
                return false;
            }
        }
        return true;
    }
}

export default PokerHand;