import { useState,useEffect } from 'react'
import '../styles/pokedex.css'

export default function Pokedex(props) {
    const [notFound, setNotFound] = useState(false)

    const [pokeData, setPokeData] = useState({
        name: "",
        frontSpriteURL: ""
    });

    useEffect(() => {
        if (props.formSubmit) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.toLowerCase()}/`)
            .then(res => res.json())
            .then(pokeData => setPokeData(prevPokemon => {
                setNotFound(false)
                const { name, sprites } = pokeData;
                return ({
                    ...prevPokemon,
                    name: name,
                    frontSpriteURL: sprites.other['official-artwork'].front_default
                })
            }))
            .catch(err => {
                setNotFound(true)
            })
        }
    }, [props.pokemon, props.formSubmit]);



    return(
        <div className="pokedex">
            {
                notFound ?
                <div className='not-found'>
                    <h1 className='not-found-text'>POKEMON NOT FOUND</h1>
                </div> 
                :
                (
                <div className='pokemon-data'>
                    <p className='pokemon-name'>{pokeData.name}</p>
                    <img className='pokemon-image' src={pokeData.frontSpriteURL} />
                </div>
                )
            }
        </div>
    )
}