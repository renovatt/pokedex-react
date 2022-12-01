import React from 'react'
import './index.css'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'
import { PokemonModal } from '../Modal'


export const Pokedex = () => {

    const [pokeList, setPokeList] = React.useState([])
    const [pokemonID, setPokemonID] = React.useState(false)

    React.useEffect(() => {
        function handleModalClick(e) {
            setPokemonID(e.target.id)
        }
        window.addEventListener('click', handleModalClick)
    }, [])

    React.useEffect(() => {
        const globalFetch = async () => {
            const URLs = await fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(res => res.json())
                .then(json => json.results)

            const promisses = URLs.map(async urls => await fetch(urls.url).then(res => res.json()))
            const result = await Promise.all(promisses)
            setPokeList(result.map(info => ({
                id: info.id,
                name: info.name,
                types: info.types.map(({ type }) => type.name),
                image: info.sprites.other.home.front_default,
                stats: info.stats.map(stat => ({ stat: stat.base_stat, name: stat.stat.name })),
                weight: info.weight,
                height: info.height
            })))
        }
        globalFetch()
    }, [])

    return (
        <>
            {pokemonID && <PokemonModal id={pokemonID} />}
            <section className='content'>
                {pokeList && pokeList.map(pokemon => (
                    <div key={pokemon.id} className={`card card${pokemon.types[0]}`}>

                        <div className='pokemon-info'>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <span>#0{pokemon.id}</span>
                            <h2>{pokemon.name}</h2>

                            <div className="types">
                                {pokemon.types.map((name, index) =>
                                    (<span className={name} key={index}>{name}</span>))}
                            </div>

                            <div className='body'>
                                <div>
                                    <span><RulerIcon /></span>
                                    Altura: {pokemon.height / 10} m
                                </div>
                                <div>
                                    <span><WeightIcon /></span>
                                    Peso: {pokemon.weight / 10} kg
                                </div>
                            </div>
                        </div>

                        {pokemon.types && (
                            <button
                                className={`${pokemon.types[0]} btn`}
                                id={pokemon.id}>
                                Mais Detalhes
                            </button>
                        )}
                    </div>
                ))}
            </section>
        </>
    )
}
