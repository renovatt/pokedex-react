import React from 'react'
import './index.css'

export const Error = () => {
    const error = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png'

    return (
        <div className='error animation'>
            <div className='message'>
                <h1>Pokemon não encontrado...</h1>
                <img src={error} alt="" />
            </div>
        </div>
    )
}
