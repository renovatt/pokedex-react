import React from 'react'
import * as S from './style'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'

export const SearchPokemon = () => {
    const [pokemon, setPokemon] = React.useState('')
    const [pokemonFetch, setPokemonFetch] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const { id, name, types, sprites } = pokemonFetch

    const fetchPokemon = async (pokemon) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const json = await response.json()
            if (json) {
                setPokemonFetch(json)
            }
        } catch {
            setError(true)
            fetchPokemon('')
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
    }, [error])

    function handleSubmit(e) {
        e.preventDefault()
        fetchPokemon(pokemon.toLocaleLowerCase())
        setPokemon('')
        setError(false)
    }

    return (
        <S.SearchContainer>
            <S.SearchHeader>
                <S.SearchForm onSubmit={handleSubmit}>
                    <S.SearchInput
                        placeholder='Procure o seu pokemon'
                        type="text"
                        required
                        value={pokemon}
                        onChange={({ target }) => setPokemon(target.value)} />
                    <S.SearchButton>Buscar</S.SearchButton>
                </S.SearchForm>
            </S.SearchHeader>

            {isLoading ? (
                <S.SearchCardContainer>
                    <Loading />
                </S.SearchCardContainer>
            ) : name ? (
                <S.SearchCardContainer className={`card${types[0].type.name}`}>
                    <S.PokemonInfo>
                        <S.PokemonID>#0{id}</S.PokemonID>
                        <S.PokemonName>{name}</S.PokemonName>
                        {types.map(({ type }) => (
                            <S.PokemonTypes key={type.name} className={type.name}>
                                {type.name}
                            </S.PokemonTypes>
                        ))}

                        <S.MoreDetails id={id} className={`${types[0].type.name}`}>
                            Mais Detalhes
                        </S.MoreDetails>
                    </S.PokemonInfo>

                    <S.ContainerImage>
                        <S.PokemonImage src={sprites.other.home.front_default} alt={name} />
                    </S.ContainerImage>
                </S.SearchCardContainer>
            ) : (
                <S.NullContent></S.NullContent>
            )}
            {error && <Error />}
        </S.SearchContainer>
    )
}
