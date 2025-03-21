import React, {useEffect, useState} from "react";


//create your first component
const Home = () => {
	const [pokemon, setPokemon] = useState([])
	// I want find a api to demo
	// I want demo useEffect 
	// and I guess we will display information that api
	// and make pages to display pokemone information using each pokemons url
	
	useEffect(() => {
		async function getPokemon() {
			let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
			let data = await response.json()
			setPokemon(data.results)
		}
		getPokemon()
	}, [])
	console.log(pokemon)

	return (
		<div className="text-center">
			{pokemon.map((eachPokemon, index)=>{
				return (
					<h1>{eachPokemon.name}</h1>
				)
			})}
		</div>
	);
};

export default Home;