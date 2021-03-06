import React, { useState, useEffect } from 'react';

function PokemonV1() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonListFetched, setPokemonListFetched] = useState(false);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { return response.json() })
            .then(response => { setPokemonList(response.results) })
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

export default PokemonV1;