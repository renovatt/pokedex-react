import React from 'react'
import * as S from './style'
import { FaArrowUp } from 'react-icons/fa'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'
import { PokemonModal } from '../Modal'
import { Loading } from '../Helper/Loading'
import { Image } from '../Helper/Image'

export const Pokedex = () => {

    const [pokeList, setPokeList] = React.useState([])
    const [pokemonID, setPokemonID] = React.useState(false)
    const [limit, setLimit] = React.useState(21)
    const [load, setLoad] = React.useState(false)

    React.useEffect(() => {
        function handleModalClick(e) {
            setPokemonID(e.target.id)
        }
        window.addEventListener('click', handleModalClick)
        return () => {
            window.removeEventListener('click', handleModalClick)
        }
    }, [])

    React.useEffect(() => {
        setLoad(true)
        const globalFetch = async () => {
            const URLs = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
                .then(res => res.json())
                .then(json => json.results)

            const promisses = URLs.map(async urls => await fetch(urls.url).then(res => res.json()))
            const result = await Promise.all(promisses)
            setPokeList(result.map(info => ({
                id: info.id,
                name: info.name,
                types: info.types.map(({ type }) => type.name),
                // image: info.sprites.other.home.front_default,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${info.id}.png`,
                stats: info.stats.map(stat => ({ stat: stat.base_stat, name: stat.stat.name })),
                weight: info.weight,
                height: info.height
            })))
            setLoad(false)
        }
        globalFetch()
    }, [limit])

    return (
        <>
            {pokemonID && <PokemonModal id={pokemonID} />}
            
            <S.PokemonContainer>
                {pokeList && pokeList.map(pokemon => (
                    <S.PokemonCard
                        key={pokemon.id}
                        className={`card${pokemon.types[0]}`}>

                        <S.PokemonInfo>
                            <Image src={pokemon.image} alt={pokemon.name} />
                            <S.PokemonID>#0{pokemon.id}</S.PokemonID>
                            <S.PokemonName>{pokemon.name}</S.PokemonName>

                            <S.PokemonTypes>
                                {pokemon.types.map((name, index) =>
                                    (<S.TypesItems className={name} key={index}>{name}</S.TypesItems>))}
                            </S.PokemonTypes>

                            <S.PokemonBodyDetails>
                                <S.Details>
                                    <S.SvgDetails><RulerIcon /></S.SvgDetails>
                                    <S.TextDetails>Altura: {pokemon.height / 10} m</S.TextDetails>
                                </S.Details>
                                <S.Details>
                                    <S.SvgDetails><WeightIcon /></S.SvgDetails>
                                    <S.TextDetails>Peso: {pokemon.weight / 10} kg</S.TextDetails>
                                </S.Details>
                            </S.PokemonBodyDetails>
                        </S.PokemonInfo>

                        {pokemon.types && (
                            <S.MoreDetailsButton
                                id={pokemon.id}
                                className={`${pokemon.types[0]}`}
                                onClick={(e) => setPokemonID(e.target.id)}>
                                Mais Detalhes
                            </S.MoreDetailsButton>
                        )}
                    </S.PokemonCard>
                ))}
            </S.PokemonContainer>
            {load ? (
                <Loading />
            ) : (
                <S.EndButtonsContainer>
                    <S.LoadButton onClick={() => setLimit(limit + 21)}>
                        Carregar mais
                    </S.LoadButton>
                    <S.ToTopButton onClick={() => window.scrollTo(0, 0)}>
                        <FaArrowUp />
                    </S.ToTopButton>
                </S.EndButtonsContainer>
            )}
        </>
    )
}
