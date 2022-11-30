import React from 'react'
import './index.css'

export const SearchPokemon = () => {
    const [pokemon, setPokemon] = React.useState('10022')
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
        <div className='search-container'>
            <section className='search-header'>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Procure o seu pokemon'
                        type="text"
                        value={pokemon}
                        onChange={({ target }) => setPokemon(target.value)} />
                    <button className='searchBtn'>Buscar</button>
                </form>
            </section>

            {name && types ? (
                <div className={`search-card card${types[0].type.name}`}>
                    <div className='search-info'>
                        <span>#0{id}</span>
                        <h1>{name}</h1>
                        {types.map(({ type }) => (
                            <span key={type.name} className={type.name}>
                                {type.name}
                            </span>
                        ))}
                    </div>

                    <div className='search-image'>
                        <img src={sprites.other.home.front_default} alt={name} />
                    </div>
                </div>
            ) : (
                <div className='search-card'>
                    <h3>Procure o seu pokemon..</h3>
                </div>
            )}
        </div>
    )
}
