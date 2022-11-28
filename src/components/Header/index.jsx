import React from 'react'
import { Preview } from '../Preview'
import './index.css'

export const Header = () => {
    const [pokemon, setPokemon] = React.useState('6')
    const [pokemonPreview, setPokemonPreview] = React.useState('')
    const { id, name, types, sprites } = pokemonPreview

    const searchPokemon = async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const json = await response.json()
        if (json) setPokemonPreview(json)
    }

    React.useEffect(() => {
        searchPokemon(pokemon.toLocaleLowerCase())
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        searchPokemon(pokemon.toLocaleLowerCase())
        setPokemon('')
    }

    return (
        <>
            <header className='header'>
                <h1>Pokedex</h1>
                <nav>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={pokemon}
                            onChange={({ target }) => setPokemon(target.value)} />
                        <button className='searchBtn'>Buscar</button>
                    </form>
                </nav>
            </header>
            <Preview id={id} name={name} types={types} sprites={sprites}/>
        </>
    )
}
