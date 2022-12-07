import React from 'react'
import load from '../../assets/load-pokeball.gif'
import ash from '../../assets/ash-2.png'
import './index.css'
import { Image } from '../Helper/Image'

export const Preview = () => {
    const [pokemonPreview, setPokemonPreview] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const { id, name, types, sprites } = pokemonPreview

    const arrPreview = [197, 215, 359, 553, 717, 727, 243, 145, 149, 384, 483, 484, 643, 644, 646, 10007, 144, 10022, 10023, 10104, 644, 10059, 807, 10059, 150]

    const searchPokemon = async (pokemon) => {
        setIsLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const json = await response.json()
        if (json) {
            setPokemonPreview(json)
            setIsLoading(false)
        }
    }

    let index = 0
    const getIndex = () => {
        if (index == arrPreview.length) {
            index = -1
        }
        searchPokemon(arrPreview[index++])
    }

    React.useEffect(() => {
        searchPokemon('150')
        const set = setInterval(() => getIndex(), 8000)
        return () => clearInterval(set)
    }, [])

    return (
        <div className='preview'>
            <div className='preview-logo animation'>
                <img src={ash} alt="Ash" />
            </div>

            {isLoading ? (
                <div className='preview-card'>
                    <div className='load'>
                        <img src={load} alt="load" />
                    </div>
                </div>
            ) : name ? (
                <div className={`preview-card animation card${types[0].type.name}`}>
                    <div className='preview-info'>
                        <span>#{id}</span>
                        <h1>{name}</h1>
                        {types.map(({ type }) => (
                            <span key={type.name} className={type.name}>
                                {type.name}
                            </span>
                        ))}
                    </div>

                    <div className='preview-image'>
                        <img src={sprites.other.home.front_default} alt={name} />
                        {/* <Image src={sprites.other.home.front_default} alt={name} /> */}
                    </div>
                </div>
            ) : (
                <div className='preview-card'>
                    <div className='load'>
                        <img src={load} alt="load" />
                    </div>
                </div>
            )}
        </div>
    )
}