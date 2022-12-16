import React from 'react'
import './index.css'
import * as S from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Header = () => {

    return (
        <S.HeaderContainer>
            <S.Title>Pokédex</S.Title>
            <S.Nav>
                <S.List>
                    <S.ItemList>
                        <S.Link
                            href="https://www.linkedin.com/in/renovatt/" target="_blank"><FaLinkedin />
                        </S.Link>
                        <S.Link
                            href="https://github.com/renovatt"
                            target="_blank"> <FaGithub />
                        </S.Link>
                    </S.ItemList>
                </S.List>
            </S.Nav>
        </S.HeaderContainer>
    )
}
