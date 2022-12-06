import React from 'react'
import './index.css'

export const Image = ({src, alt }) => {
    const [skeleton, setSkeleton] = React.useState(true)
    function handleLoad({ target }) {
        target.style.opacity = 1
        setSkeleton(false)
    }
    return (
        <div className='wrapper'>
            {skeleton && <div className='skeleton'></div>}
            <img className='img' src={src} alt={alt} onLoad={handleLoad} />
        </div>
    )
}
