import React, { useState, useEffect } from "react";
import PlayerList from "./player-container";

const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch(`${APIURL}/players`);
      const {
        data: { players },
      } = await response.json();
      setPlayers(players);
      setFilteredPlayers(players);
    };
    fetchAllPlayers();
  }, []);

  const handleSearchClick = () => {
    setFilteredPlayers(
      players.filter(
        (player) => player.name.toLowerCase() === searchString.toLowerCase()
      )
    );
  };

  return (
    <div id="app">
      <div id="searchbar">
        <input
          value={searchString}
          onChange={(event) => setSearchString(event.currentTarget.value)}
          placeholder="Search Pup Here!"
        ></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div id="all-players-container">
        <PlayerList players={filteredPlayers} />
      </div>
    </div>
  );
};
export default Home;
