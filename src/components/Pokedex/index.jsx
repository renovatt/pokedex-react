import React from 'react'
import './index.css'

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
                stat_name: info.stats.map(stat => stat.stat.name),
                stats: info.stats.map(stat => stat.base_stat),
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
                                <p>Altura: {pokemon.height / 10}m</p>
                                <p>Peso: {pokemon.weight / 10}kg</p>
                            </div>
                        </div>

                        <div className='stats'>
                            <div className='stats-name'>
                                {pokemon.stat_name.map((name, index) =>
                                    (<p key={index}>{name}</p>))}
                            </div>
                            <div className='stats-value'>
                                {pokemon.stats.map((value, index) =>
                                    (<p key={index}>{value}</p>))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
