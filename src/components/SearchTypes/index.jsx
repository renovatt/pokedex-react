import React from 'react'
import { Image } from '../Helper/Image'
import { Loading } from '../Helper/Loading'
import * as S from './style'
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
            console.log(err + "Algumas imagens não podem ser carregadas!")
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
        <S.SearchTypeContainer>
            <S.SearchTypeNavigation>
                <S.NavigationList>
                    {Types.map(type => (
                        <S.NavigationItems
                            name={type.name}
                            key={type.name}
                            className={type.name}
                            onClick={handleClick}>{type.name}</S.NavigationItems>
                    ))}
                </S.NavigationList>
            </S.SearchTypeNavigation>

            {isLoading ? (
                <S.PokemonContainer>
                    <Loading />
                </S.PokemonContainer>
            ) :
                typeSelected && (
                    <S.PokemonContainer>
                        {typeListPokemons && typeListPokemons.map(pokemon => (
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
                                        className={`${pokemon.types[0]}`}>
                                        Mais Detalhes
                                    </S.MoreDetailsButton>
                                )}
                            </S.PokemonCard>
                        ))}
                    </S.PokemonContainer>
                )}
        </S.SearchTypeContainer>
    )
}
