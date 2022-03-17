import React from 'react';
import classes from '../Movie.module.css'

const Ships = (props) => {
    console.log(props.model)
    return (
        <li className={classes.movie}>
            <h2>{props.name}</h2>
            <h3>{props.model}</h3>
            <h4>{props.class}</h4>
            <p>{props.crew}</p>

        </li>
    );
}

export default Ships;
