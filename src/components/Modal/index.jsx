import React from 'react'
import './index.css'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'

const progressBar = keyframes`
to{
    transform: initial;
}`

const ProgressBar = styled.div`
    height: .5rem;
    border-radius: .25rem;
    width: ${(props) =>
        props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
    background: ${(props) =>
        (props.base_stat >= 50 ? '#00ff08' : '#ff0000')};
    transform: translate3d(-100%, 0, 0);
    animation: ${progressBar} 2s forwards;
`

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
                            {stats.map(({ stat, base_stat }) => {
                                return (
                                    <div className='stat' >
                                        <p>{stat.name}</p>
                                        <p className='stat-value'>{base_stat}</p>
                                        <div className='bar'>
                                            <ProgressBar base_stat={base_stat}></ProgressBar>
                                            {/* <div className='bar-progress' style={{ "width": base_stat + "%" }}></div> */}
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
