import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import Shipslist from './components/Ships/ShipsList';
import Vehiclelist from './components/Vehicle/vehicleList';
import './App.css';

function App() {
  const [People, setPeople] = useState([])
  const [starship, setStarship] = useState([])
  const [Vehicle, setVehicle] = useState([])

  function fetchPeopleHandler() {
    fetch('https://swapi.dev/api/people')
      .then(responce =>{
        return responce.json()
      }).then(data =>{
        console.log(data)

        const transformedPeople = data.results.map(movieData => {
          return{
            name: movieData.name,
            height: movieData.height,
            mass: movieData.mass,
            hair: movieData.hair_color,
            eye: movieData.eye_color,
            skin: movieData.skin_color,
            birthYear: movieData.birth_year
          }
        })

        console.log(transformedPeople) 
        setPeople(transformedPeople)}).catch()
  }
  function fetchStarshipHandler () {
    fetch('https://swapi.dev/api/starships')
      .then(responce =>{
        return responce.json()
      }).then(data => {

        const transformedStarships = data.results.map(ship =>{
          return{
            name: ship.name,
            model: ship.model,
            class: ship.starship_class
          }
        })
      
        setStarship(transformedStarships)
      })
  }
  function fetchVehiclesHandler () {
    fetch('https://swapi.dev/api/vehicles')
      .then(responce => { return responce.json()})
      .then(data => {
        const transformedVehicles = data.results.map(vehicle =>{
          return{
            name: vehicle.name,
            model: vehicle.model,
            crew: vehicle.crew,
            class: vehicle.vehicle_class
          }
        })

        setVehicle(transformedVehicles)
      })
  }
  
  return (
    <div>
      <section>
        <button onClick={fetchPeopleHandler}>Fetch Movies</button>
        <button onClick={fetchStarshipHandler}>Fetch Starships</button>
        <button onClick={fetchVehiclesHandler}>Fetch vehicles</button>
      </section>
      <section>
        <MoviesList movies={People} />
        <Shipslist ships={starship}/>
        <Vehiclelist vehicle={Vehicle}/>
      </section>
      
      </div>
  );
}

export default App;
