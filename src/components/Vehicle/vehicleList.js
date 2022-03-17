import React from 'react';
import classes from '../MoviesList.module.css'
import Vehicle from './vehicle';

const Vehiclelist = (props) => {
    console.log(props)
    return (
        <ul className={classes['movies-list']}>
        {props.vehicle.map((vehicle, i) => (
            <Vehicle
                key={i}
                name={vehicle.name}
                model={vehicle.model}
                class={vehicle.class}
                crew={vehicle.crew}

            />
        ))}
        

        </ul>
    );
}

export default Vehiclelist;
