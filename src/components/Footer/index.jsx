import React from 'react'
import './index.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <p>&copy; willcode | Criado por <a href="https://www.linkedin.com/in/renovatt/">renovatt</a></p>
        <p>Direitos de imagens reservados para Nitendo & The Pokémon Company</p>
      </div>
      <div className='social-icons'>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/renovatt/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/renovatt" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
