import React from 'react';

interface ICardProps {
    rank: string,
    suit: string,
    pic: string
}

const Cards: React.FC<ICardProps> = (props) => {
    return (
          <span className={`card rank-${props.rank} ${props.suit}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.pic}</span>
          </span>
    );
};

export default Cards;