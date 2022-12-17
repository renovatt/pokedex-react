import React from 'react'
import load from '../../assets/load-pokeball.gif'
import ash from '../../assets/ash-2.png'
import * as S from './style'

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
        <S.PreviewContainer>
            <S.LogoContainer>
                <S.LogoImage src={ash} alt="Ash" />
            </S.LogoContainer>

            {isLoading ? (
                <S.PreviewCard>
                    <S.LoadContainer>
                        <S.LoadImage src={load} alt="load" />
                    </S.LoadContainer>
                </S.PreviewCard>
            ) : name ? (
                <S.PreviewCard className={`card${types[0].type.name}`}>
                    <S.PreviewInfo>
                        <S.PokemonID>#{id}</S.PokemonID>
                        <S.PokemonName>{name}</S.PokemonName>
                        {types.map(({ type }) => (
                            <S.PokemonTypes key={type.name} className={type.name}>
                                {type.name}
                            </S.PokemonTypes>
                        ))}
                    </S.PreviewInfo>

                    <S.PreviewPokemon>
                        <S.PreviewPokemonImage
                            src={sprites.other.home.front_default} alt={name} />
                    </S.PreviewPokemon>
                </S.PreviewCard>
            ) : (
                <S.PreviewCard>
                    <S.LoadContainer>
                        <S.LoadImage src={load} alt="load" />
                    </S.LoadContainer>
                </S.PreviewCard>
            )}
        </S.PreviewContainer>
    )
}