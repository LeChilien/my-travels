// src/Travel.js
import React from "react";

const Travel = ({destination, city, photo, distance}) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockprop>{destination}</blockprop>
      <blockprop>{city}</blockprop>
      <blockprop>{distance}</blockprop>
    </figcaption>
</figure>
);

export default Travel;


