import React, { useState, useEffect } from "react";
import PlayerList from "./player-container";

const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const Home = () => {
  const [players, setPlayers] = useState([]);
  //   const [selectedPuppy, setSelectedPuppy] = useState({});
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
  return (
    <div id="app">
      <div id="searchbar"></div>
      <div id="all-players-container">
        <PlayerList players={players} />
      </div>
    </div>
  );
};
export default Home;
