import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log(props)
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie, i) => (
        <Movie
          key={i}
          name={movie.name}
          height={movie.height}
          mass={movie.mass}
          hair={movie.hair}
          eye={movie.eye}
          skin={movie.skin}
          year={movie.birthYear}
        />
      ))}
    </ul> 
  );
};

export default MovieList;
