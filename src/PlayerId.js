import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const PlayerId = (props) => {
  const [selectedPup, setSelectedPup] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchPup = async (id) => {
      const response = await fetch(`${APIURL}/players/${id}`);
      const {
        data: { player },
      } = await response.json();
      setSelectedPup(player);
    };
    fetchPup(id);
  }, []);
  return (
    <div className="single-player-view">
      <img src={selectedPup.imageUrl} alt={`Photo of ${selectedPup.name}`} />
      <p>
        <b>Name: </b> {selectedPup.name}
      </p>
      <p>
        <b>ID: </b> {selectedPup.id}
      </p>
      <p>
        <b>Breed: </b> {selectedPup.breed}
      </p>
      <p>
        <b>Status: </b> {selectedPup.status}
      </p>
      <p>
        <b>Team ID: </b> {selectedPup.teamId}
      </p>
    </div>
  );
};
export default PlayerId;
