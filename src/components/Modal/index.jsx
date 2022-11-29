import React from 'react'
import './index.css'
import { ProgressBar } from './style'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'
import { ReactComponent as Pokeball } from '../../assets/divider-pokeball.svg'

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

    return (
        <div className='modal'>
            {pokemon && (
                <div className='modal-card'>
                    <div className='modal-pokemon-info'>
                        <img src={sprites.other.home.front_default} alt={name} />
                        <span>#0{id}</span>
                        <h2>{name}</h2>

                        <div className="modal-types">
                            {types.map(({ type }) => (
                                <p key={type.name} className={type.name}>{type.name}</p>
                            ))}
                        </div>

                        <div className='modal-body'>
                            <div><span><RulerIcon /></span>Altura: {height / 10} m</div>
                            <div><span><WeightIcon /></span>Peso: {weight / 10} kg</div>
                        </div>
                    </div>

                    <Pokeball className='pokeball'/>

                    <div className="modal-pokemon-stat">
                        <div className='modal-stats'>
                            {stats.map(({ stat, base_stat }) => {
                                return (
                                    <div className='modal-stat' >
                                        <span className='modal-stat-name'>{stat.name}</span>
                                        <span className='modal-stat-value'>{base_stat}</span>
                                        <div className='modal-bar'>
                                            <ProgressBar base_stat={base_stat}></ProgressBar>
                                        </div>
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
