import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";

const playerId = (props) => {
  return (
    <div id="singlePuppy">
      <SinglePlayerCard />
      <p>
        <b>Name:</b>
        {props.selectedPuppy.name}
      </p>
      <p>
        <b>Email:</b>
        {props.selectedContact.email}
      </p>
      <p>
        <b>Phone:</b>
        {props.selectedContact.phone}
      </p>
      <div>
        <b>Address:</b>
        <p>
          <b>Street:</b>
          <br />
          <b>City/State:</b>
        </p>
      </div>
      <p>
        <b>Company:</b>
        {props.selectedContact.company.name}
      </p>
    </div>
  );
};
