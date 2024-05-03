import '../styles/header.css'
import { useState } from 'react';

export default function Header(props) {

    return (
        <div className="header">
            <div className="left-header">
                <h4>PokeDex App</h4>
            </div>
            <div className="center-header">
                <form onSubmit={props.handleSubmit}>
                    <input 
                        className="pokemon-input"
                        type="search" 
                        placeholder="Search a Pokemon!"
                    />
                </form>
            </div>
            <div className="right-header">
                <a href='https://pokeapi.co/' target='_blank'>Check out the API!</a>
            </div>
        </div>
    )
}