import React from 'react'
import * as S from './style'
import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg'
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg'
import { ReactComponent as Pokeball } from '../../assets/divider-pokeball.svg'
import { Image } from '../Helper/Image'

export const PokemonModal = ({ id }) => {

    const [pokemon, setPokemon] = React.useState('')
    const { name, types, sprites, height, weight, stats } = pokemon
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`

    React.useEffect(() => {
        const modalFetch = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const json = await res.json()
            setPokemon(json)
        }
        modalFetch()
    }, [id])

    return (
        <S.ModalContainer>
            {pokemon && (
                <S.ModalCard>
                    <S.ModalInfo>
                        <Image src={image} alt={name} />
                        <S.PokemonID>#0{id}</S.PokemonID>
                        <S.PokemonName>{name}</S.PokemonName>

                        <S.ModalTypes>
                            {types.map(({ type }) => (
                                <S.Types key={type.name} className={type.name}>{type.name}</S.Types>
                            ))}
                        </S.ModalTypes>

                        <S.ModalBody>
                            <S.Details><S.SvgDetails><RulerIcon /></S.SvgDetails>Altura: {height / 10} m</S.Details>
                            <S.Details><S.SvgDetails><WeightIcon /></S.SvgDetails>Peso: {weight / 10} kg</S.Details>
                        </S.ModalBody>
                    </S.ModalInfo>

                    <Pokeball className='pokeball-icon' />

                    <S.StatsContainer>
                        <S.Stats>
                            {stats.map(({ stat, base_stat }) => {
                                return (
                                    <S.StatContent key={stat.name}>
                                        <S.StatName>{stat.name}</S.StatName>
                                        <S.StatValue>{base_stat}</S.StatValue>
                                        <S.StatBar>
                                            <S.ProgressBar base_stat={base_stat}></S.ProgressBar>
                                        </S.StatBar>
                                    </S.StatContent>
                                )
                            })}
                        </S.Stats>
                    </S.StatsContainer>
                </S.ModalCard>
            )}
        </S.ModalContainer>
    )
}
