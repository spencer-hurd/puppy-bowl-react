import ReactDOM, { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SinglePlayerCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="single-player-card">
      <div className="header-info">
        <p className="pup-title">{props.pup.name}</p>
        <p className="pup-number">{props.pup.id}</p>
      </div>
      <img src={props.pup.imageUrl} alt={`Photo of ${props.pup.name}`} />
      <button
        onClick={() => navigate(`/pup/${props.pup.id}`)}
        className="detail-button"
        data-id={props.pup.id}
      >
        See details
      </button>
    </div>
  );
};

export default SinglePlayerCard;
