import React from 'react'
import './index.css'

export const SearchPokemon = () => {
    const [pokemon, setPokemon] = React.useState('')
    const [pokemonFetch, setPokemonFetch] = React.useState('')
    const { id, name, types, sprites } = pokemonFetch

    const fetchPokemon = async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const json = await response.json()
        if (json) setPokemonFetch(json)
    }

    React.useEffect(() => {
        fetchPokemon(pokemon)
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        fetchPokemon(pokemon.toLocaleLowerCase())
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
                    <button>Buscar</button>
                </form>
            </section>

            {name && types ? (
                <div className={`search-card animation card${types[0].type.name}`}>
                    <div className='search-info'>
                        <span>#0{id}</span>
                        <h1>{name}</h1>
                        {types.map(({ type }) => (
                            <span key={type.name} className={type.name}>
                                {type.name}
                            </span>
                        ))}

                        <button
                            className={`search-btn ${types[0].type.name}`}
                            id={id}>
                            Mais Detalhes
                        </button>
                    </div>

                    <div className='search-image'>
                        <img src={sprites.other.home.front_default} alt={name} />
                    </div>
                </div>
            ) : (
                <div className='search-first'>
                    <h2>Procure pelo seu Pokemon favorito!</h2>
                </div>
            )}
        </div>
    )
}
