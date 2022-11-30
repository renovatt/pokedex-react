import React from 'react'
import './index.css'

export const Preview = ({ id, name, types, sprites }) => {
    return (
        <div className='preview'>
            <div className='preview-logo'>
                <h2>Something</h2>
            </div>

            {name && types ? (
                <div className={`preview-card card${types[0].type.name}`}>
                    <div className='preview-info'>
                        <span>#0{id}</span>
                        <h1>{name}</h1>
                        {types.map(({ type }) => (
                            <span key={type.name} className={type.name}>
                                {type.name}
                            </span>
                        ))}
                    </div>

                    <div className='preview-image'>
                        <img src={sprites.other.home.front_default} alt={name} />
                    </div>
                </div>
            ) : (
                <div className='preview-card'>
                    <h3>Procure o seu pokemon..</h3>
                </div>
            )}
        </div>
    )
}