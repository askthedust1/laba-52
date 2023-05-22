import React, {useState} from 'react';
import './App.css';
import './cards.css';
import Cards from "./Card/cards";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [outcome, setOutcome] = useState<string>('');

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
        const cardPoker = new PokerHand(newCards);
        const outcome = cardPoker.getOutcome();
        setOutcome(outcome);
    }

    if (cards.length === 0) {
        return <button onClick={getCards}> Раздать карты </button>
    }


    return (
        <div className="App">
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <Cards key={index} rank={card.rank} suit={card.suit} pic={card.pic}/>
                ))}
            </div>
            <p>{outcome}</p>
            <button onClick={getCards}> Раздать карты </button>
        </div>
    );
};

export default App;
