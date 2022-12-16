import React from 'react'
import * as S from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.TextContent>
          &copy; willcode | Criado por <S.LinkContent href="https://www.linkedin.com/in/renovatt/">renovatt</S.LinkContent>
        </S.TextContent>
        <S.TextContent>
          Direitos de imagens reservados para Nitendo & The Pokémon Company
        </S.TextContent>
      </S.FooterContent>

      <S.SocialIcons>
        <S.ListIcons>
          <S.ItemsIcons>
            <S.LinkIcons
              href="https://www.linkedin.com/in/renovatt/"
              target="_blank"><FaLinkedin /></S.LinkIcons>
            <S.LinkIcons
              href="https://github.com/renovatt"
              target="_blank"><FaGithub /></S.LinkIcons>
          </S.ItemsIcons>
        </S.ListIcons>
      </S.SocialIcons>
    </S.FooterContainer>
  )
}
