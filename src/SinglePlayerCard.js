import ReactDOM, { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";

const SinglePlayerCard = (props) => {
  return (
    <div class="single-player-card">
      <div class="header-info">
        <p class="pup-title">{props.pup.name}</p>
        <p class="pup-number">{props.pup.id}</p>
      </div>
      <img src="props.pup.imageUrl" alt="photo of {props.pup.name} the puppy" />
      <button class="detail-button" data-id={props.pup.id}>
        See details
      </button>
    </div>
  );
};

export default SinglePlayerCard;
