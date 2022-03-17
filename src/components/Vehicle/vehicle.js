import React from 'react';
import classes from '../Movie.module.css'

const Vehicle = (props) => {
    return (
        <li className={classes.movie}>
           
           <h2>{props.name}</h2>
            <h3>Model: {props.model}</h3>
            <h4>Class: {props.class}</h4>
            <p>Crew: {props.crew}</p>
        </li>
    );
}

export default Vehicle;
