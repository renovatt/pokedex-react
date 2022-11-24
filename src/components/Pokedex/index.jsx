import React from 'react'
import './index.css'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'

export const Pokedex = () => {

    const [pokeList, setPokeList] = React.useState([])

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
            <h2>Pokemons</h2>
            <section className='content'>
                {pokeList && pokeList.map(pokemon => (
                    <div key={pokemon.id} className='card'>

                        <div className='pokemon-info'>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <p>#0{pokemon.id}</p>
                            <h2>{pokemon.name}</h2>

                            <div className="types">
                                {pokemon.types.map((name, index) =>
                                    (<p className={name} key={index}>{name}</p>))}
                            </div>

                            <div className='body'>

                                <p> <WeightIcon/> Altura: {pokemon.height / 10}m</p>
                                <p> <RulerIcon/> Peso: {pokemon.weight / 10}kg</p>
                            </div>
                        </div>

                        <div className='stats'>
                            {pokemon.stats.map((stat) => {
                                return (
                                    <div className='stat'>
                                        <p>{stat.name}</p>
                                        <div className='bar-value'>
                                            <div className='bar' style={{ "width": stat.stat + "%" }}></div>
                                        </div>
                                        <div className='stat-value'>{stat.stat}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
