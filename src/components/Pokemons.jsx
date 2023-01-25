import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemons = () => {
    const [Response,setResponse] = useState([]);

    const Fetch = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000")
        .then(resultado =>{
            setResponse(resultado.data.results);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return ( 
        <>
            <button onClick={Fetch}>Fetch Pokemon</button>
            <ul>
                {Response.map((elemento)=>{
                    return <li>{elemento.name}</li>
                })

                }
            </ul>
        </>
    );
}

export default Pokemons;
