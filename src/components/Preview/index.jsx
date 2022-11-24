import React from 'react'
import './index.css'

export const Preview = ({ id, name, types, sprites }) => {
    return (
        <div className='container'>
            <div className='preview'>
                <div>
                    <h2>Something</h2>
                </div>

                {name ? (
                    <div className='unique-card'>
                        <div>
                            <p>#0{id}</p>
                            <h1>{name}</h1>
                            {types.map(({ type }) => (
                                <p key={type.name} className={type.name}>{type.name}</p>
                            ))}
                        </div>
                        <div>
                            <img src={sprites.other.home.front_default} alt={name} />
                        </div>
                    </div>
                ) : (
                    <div className='unique-card'>
                        <h3>Procure o seu pokemon..</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
