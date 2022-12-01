import ReactDOM, { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import SinglePlayerCard from "./SinglePlayerCard";

const PlayerList = (props) => {
  const { players } = props;
  //console.log("players", players, "props", props);
  //x();
  return (
    <>
      {players.map((pup) => {
        return <SinglePlayerCard pup={pup} key={pup.id} />;
      })}
    </>
  );
};
export default PlayerList;
