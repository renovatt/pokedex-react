import React from 'react'
import './index.css'
import { Image } from '../Helper/Image'
import { Loading } from '../Helper/Loading'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'

export const SearchTypes = () => {
    const Types = [
        { name: "bug" },
        { name: "dark" },
        { name: "dragon" },
        { name: "electric" },
        { name: "fairy" },
        { name: "fighting" },
        { name: "fire" },
        { name: "flying" },
        { name: "ghost" },
        { name: "grass" },
        { name: "ground" },
        { name: "ice" },
        { name: "normal" },
        { name: "poison" },
        { name: "psychic" },
        { name: "rock" },
        { name: "steel" },
        { name: "water" },
    ]

    const [typeSelected, setTypeSelected] = React.useState('')
    const [typeListPokemons, setTypeListPokemons] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const typesFetch = async () => {
        setIsLoading(true)
        try {
            const URLs = await fetch(`https://pokeapi.co/api/v2/type/${typeSelected}`)
                .then(res => res.json())
                .then(json => json.pokemon)

            const promisses = URLs.map(async urls => await fetch(urls.pokemon.url).then(res => res.json()))
            const result = await Promise.all(promisses)
            setTypeListPokemons(result.map(info => ({
                id: info.id,
                name: info.name,
                weight: info.weight,
                height: info.height,
                types: info.types.map(({ type }) => type.name),
                // image: info.sprites.other.home.front_default,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${info.id}.png`,
                stats: info.stats.map(stat => ({ stat: stat.base_stat, name: stat.stat.name }))
            })))
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        if (typeSelected) typesFetch()
    }, [typeSelected])

    function handleClick(e) {
        setTypeSelected(e.target.outerText.toLowerCase())
    }

    return (
        <div className='search-type-container'>
            <nav className='search-type-nav'>
                <ul>
                    {Types.map(type => (
                        <li
                            name={type.name}
                            key={type.name}
                            className={type.name}
                            onClick={handleClick}>{type.name}</li>
                    ))}
                </ul>
            </nav>

            {isLoading ? (
                <div className='search-card'>
                    <Loading />
                </div>
            ) :
                typeSelected && (
                    <section className='content'>
                        {typeListPokemons && typeListPokemons.map(pokemon => (
                            <div key={pokemon.id} className={`card card${pokemon.types[0]}`}>

                                <div className='pokemon-info'>
                                    <Image src={pokemon.image} alt={pokemon.name} />
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
                )}
        </div>
    )
}
