import { React, useState, useEffect } from 'react'
import Header from './components/Header'
import PokeDex from './components/Pokedex'

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formSubmit, setFormSubmit ] = useState(false);
  const [pokemon, setPokemon] = useState("");



  function handleSubmit(event) {
    event.preventDefault();
    setPokemon(event.target[0].value);
    setFormSubmit(true);
  }

  return (
    <>
      <Header 
      handleSubmit={handleSubmit} 
      />
      <PokeDex 
      pokemon={pokemon} 
      formSubmit={formSubmit}
      />
    </>
  )
}
