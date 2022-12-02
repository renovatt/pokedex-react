import React from 'react'
import './index.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Header = () => {

    return (
        <header className='header'>
            <h1 className='animation'>Pokédex</h1>
            <nav className='social-icons animation'>
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
            </nav>
        </header>
    )
}
