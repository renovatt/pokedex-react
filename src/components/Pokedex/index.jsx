import React from 'react'
import './index.css'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'
import { PokemonModal } from '../Modal'

export const Pokedex = () => {

    const [pokeList, setPokeList] = React.useState([])
    const [idModal, setIdModal] = React.useState(false)

    React.useEffect(() => {
        function handleModalClick(e) {
            setIdModal(e.target.id)
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
        <div>
            {idModal && <PokemonModal id={idModal} />}
            <h2 className='subtitle'>Pokemons</h2>

            <section className='content'>
                {pokeList && pokeList.map(pokemon => (
                    <div key={pokemon.id} className={`card card${pokemon.types[0]}`}>

                        <div className='pokemon-info'>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <p>#0{pokemon.id}</p>
                            <h2>{pokemon.name}</h2>

                            <div className="types">
                                {pokemon.types.map((name, index) =>
                                    (<p className={name} key={index}>{name}</p>))}
                            </div>

                            <div className='body'>
                                <p><span><RulerIcon /></span>Altura: {pokemon.height / 10}m</p>
                                <p><span><WeightIcon /></span>Peso: {pokemon.weight / 10}kg</p>
                            </div>
                        </div>

                        <div className="pokemon-stat">
                            <div className='stats'>
                                {pokemon.stats.map((stats, index) => {
                                    return (
                                        <div className='stat' key={index}>
                                            <p>{stats.name}</p>
                                            <div className='bar'>
                                                <div className='bar-progress' style={{ "width": stats.stat + "%" }}></div>
                                            </div>
                                            <p className='stat-value'>{stats.stat}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            {pokemon.types && (
                                <button
                                    className={`${pokemon.types[0]} btn`}
                                    id={pokemon.id}>
                                    Mais detalhes
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
