import { useState, useEffect } from 'react'
import { pokemonData } from '../pokeDB/pokemon_data'
import PokeList from '../components/PokeList'
import '../styles/pokedex.css'

export default function Pokedex(props) {
    const pokeData = pokemonData;

    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currPokemon, setCurrPokemon] = useState(
        Object.values(pokeData).slice(0, 20)
    );

    function updateCurrPokemon() {
        setCurrPokemon(prevState => prevState.concat(
            Object.values(pokeData).slice(
            prevState.length, prevState.length + 20
        )))
    }

    useEffect(() => {
        const handleScroll = () => {
          if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            setIsLoading(true)
            updateCurrPokemon();
          }
        };
        window.addEventListener('scroll', handleScroll);

        setIsLoading(false);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isLoading]);
    

    return(
        <div className="pokedex">
            {
                notFound ?
                <div className='not-found'>
                    <h1 className='not-found-text'>POKEMON NOT FOUND</h1>
                </div> 
                :
                (
                <div className='pokemon-list'>
                    <table className="pokemon-table">
                        <thead className='pokemon-labels'>
                            <tr>
                            <th>Sprite</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Types</th>
                            </tr>
                        </thead>
                        <tbody className='pokemon-list'>
                        {
                            currPokemon.map((pokemon) => {
                                return (
                                    <PokeList key={pokemon.id} pokemon={pokemon}/>
                                    )
                                })
                        }
                        </tbody>
                    </table>
                </div>
                )
            }
        </div>
    )
}