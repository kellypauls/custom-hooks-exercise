import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from "./Hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggle] = useFlip();

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggle}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
