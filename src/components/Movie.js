import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log(props)
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>Height in cm:{props.height}</h3>
      <h4>Birth year: {props.year}</h4>
      <p>kg:{props.mass}</p>
      <p>Hair Color: {props.hair}</p>
      <p>Eye Color: {props.eye}</p>
      <p>Skin Color: {props.skin}</p>
    </li>
  );
};

export default Movie;
