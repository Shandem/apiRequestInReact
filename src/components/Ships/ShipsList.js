import React from 'react';
import Ships from './Ships';
import classes from '../MoviesList.module.css'

const Shipslist = (props) => {
    console.log(props.ships )
    return (
        <ul className={classes['movies-list']}>
          {props.ships.map((ship, i) => (
              <Ships
                  key={i}
                  name={ship.name}
                  model={ship.model}
                  class={ship.class}
              />
          ))} 
          
       </ul>
    );
}

export default Shipslist;
