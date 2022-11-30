import React from 'react'
import { Preview } from '../Preview'
import './index.css'

export const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <h1>Pokedex</h1>
                <nav>
                    <ul>
                        <li>teste</li>
                    </ul>
                </nav>
            </header>
            <Preview />
        </div>
    )
}
