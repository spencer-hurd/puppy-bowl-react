import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";
const cohortName = "2211-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const PlayerId = (props) => {
  return (
    <div className="single-player-view">
      <img src={props.pup.imageUrl} alt={`Photo of ${props.pup.name}`} />
      <p>
        <b>Name: </b> {props.pup.name}
      </p>
      <p>
        <b>ID: </b> {props.pup.id}
      </p>
      <p>
        <b>Breed: </b> {props.pup.breed}
      </p>
      <p>
        <b>Status: </b> {props.pup.status}
      </p>
      <p>
        <b>Team ID: </b> {props.pup.teamId}
      </p>
    </div>
  );
};
export default PlayerId;
