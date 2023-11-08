import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./Hooks";
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random
 * and remove all cards. */

function CardTable() {
  const [cards, addCards, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  )
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCards(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the board</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}


CardTable.defaultProps = {};

export default CardTable;
