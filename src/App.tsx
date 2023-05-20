import React, {useState} from 'react';
import './App.css';
import './cards.css';
import Cards from "./Card/cards";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    }

    if (cards.length === 0) {
        return <button onClick={getCards}> Раздать карты </button>
    }


    return (
        <div className="App">
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <Cards key={index} rank={card.rank} suit={card.suit} />
                ))}
            </div>
            <button onClick={getCards}> Раздать карты </button>
        </div>
    );
};

export default App;
