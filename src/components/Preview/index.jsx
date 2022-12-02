import React from 'react'
import load from '../../assets/load-pokeball.gif'
import './index.css'

export const Preview = () => {
    const [pokemonPreview, setPokemonPreview] = React.useState('')
    const [aniLoad, setAniLoad] = React.useState(false)
    const { id, name, types, sprites } = pokemonPreview

    const arrPreview = [197, 215, 359, 553, 717, 727, 243, 145, 149, 384, 483, 484, 643, 644, 646, 10007, 144, 10022, 10023, 10104, 644, 807]

    const searchPokemon = async (pokemon) => {
        setAniLoad(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const json = await response.json()
        if (json) {
            setPokemonPreview(json)
            setAniLoad(false)
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
        searchPokemon('25')
        const set = setInterval(() => getIndex(), 8000)
        return () => clearInterval(set)
    }, [])

    return (
        <div className='preview'>
            <div className='preview-logo'>
                <h2>Something</h2>
            </div>

            {aniLoad ? (
                <div className='preview-card'>
                    <div className='load'>
                        {/* <img src={load} alt="load" /> */}
                    </div>
                </div>
            ) : name ? (
                <div className={`preview-card animation card${types[0].type.name}`}>
                    <div className='preview-info'>
                        <span>#0{id}</span>
                        <h1>{name}</h1>
                        {types.map(({ type }) => (
                            <span key={type.name} className={type.name}>
                                {type.name}
                            </span>
                        ))}
                    </div>

                    <div className='preview-image'>
                        <img src={sprites.other.home.front_default} alt={name} />
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