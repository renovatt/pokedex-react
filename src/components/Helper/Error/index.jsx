import React from 'react'
import * as S from './style'

export const Error = () => {
    const error = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png'

    return (
        <S.ErrorContainer>
            <S.Message>
                <S.TextMessage>Pokemon não encontrado...</S.TextMessage>
                <S.ErrorImage src={error} alt="error" />
            </S.Message>
        </S.ErrorContainer>
    )
}
