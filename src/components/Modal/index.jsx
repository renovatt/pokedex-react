import React from 'react'
import './index.css'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'

export const PokemonModal = ({ id }) => {

    const [pokemon, setPokemon] = React.useState('')
    const { name, types, sprites, height, weight, stats } = pokemon

    // React.useEffect(() => {
    //     const findPokemon = pokemons.find(pokemon => pokemon.id === +id)
    //     setPokemon(findPokemon)
    // }, [id, pokemon])

    React.useEffect(() => {
        const modalFetch = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const json = await res.json()
            setPokemon(json)
        }
        modalFetch()
    }, [id])

    // console.log(types[0].type.name)
    return (
        <div className='modal'>
            {pokemon && (
                <div className='card modalCard'>
                    <div className='pokemon-info'>
                        <img src={sprites.other.home.front_default} alt={name} />
                        <p>#0{id}</p>
                        <h2>{name}</h2>

                        <div className="types">
                            {types.map(({ type }) => (
                                <p key={type.name} className={type.name}>{type.name}</p>
                            ))}
                        </div>

                        <div className='body'>
                            <p><span><RulerIcon /></span>Altura: {height / 10}m</p>
                            <p><span><WeightIcon /></span>Peso: {weight / 10}kg</p>
                        </div>
                    </div>

                    <div className="pokemon-stat">
                        <div className='stats'>
                            {stats.map((stats, index) => {
                                return (
                                    <div className='stat' key={index}>
                                        <p>{stats.stat.name}</p>
                                        <div className='bar'>
                                            <div className='bar-progress' style={{ "width": stats.base_stat + "%" }}></div>
                                        </div>
                                        <p className='stat-value'>{stats.base_stat}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
