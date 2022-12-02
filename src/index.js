import ReactDOM, { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import PlayerList from "./player-container";
const appElement = document.getElementById("app");
const root = createRoot(appElement);
const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPuppy, setSelectedPuppy] = useState([]);

  //  {

  //     response
  //     {
  //         data {
  //             players: [ {}, {}]
  //         }
  //     }
  //  }

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch(`${APIURL}/players`);
      const {
        data: { players },
      } = await response.json();
      setPlayers(players);
    };
    fetchAllPlayers();
  }, []);
  console.log(players);
  return (
    <div id="app">
      <div id="searchbar"></div>
      <div id="all-players-container">
        <PlayerList players={players} />
      </div>
    </div>
  );
};
root.render(<Main />);
