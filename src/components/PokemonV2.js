import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonV2() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonListFetched, setPokemonListFetched] = useState(false);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            // .then(response => { return response.json() })
            // .then(response => { console.log(response.data); })
            .then(response => { setPokemonList(response.data.results) })
            .catch(err => { console.log(err); })
    }, []);

    const fetchHandler = event => {
        setPokemonListFetched(true);
    }

    const buttonStyle = {
        backgroundColor: "red",
    };
    const nameStyle = {
        // display: "inline-block",
    };

    return <div>
        <button onClick={fetchHandler} style={buttonStyle}>Fetch Pokemon</button>
        <div>
            {pokemonListFetched && pokemonList.map(pokemon => {
                return (
                    <div key={pokemon.name} style={nameStyle}>
                        <p>{pokemon.name} </p>
                    </div>
                )
            })}
        </div>
    </div>
}

export default PokemonV2;