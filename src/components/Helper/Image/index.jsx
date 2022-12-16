import React from 'react'
import * as S from './style'

export const Image = ({ src, alt }) => {
    const [skeleton, setSkeleton] = React.useState(true)
    function handleLoad({ target }) {
        target.style.opacity = 1
        setSkeleton(false)
    }
    return (
        <S.Wrapper>
            {skeleton && <S.Skeleton></S.Skeleton>}
            <S.Image className='img' src={src} alt={alt} onLoad={handleLoad} />
        </S.Wrapper>
    )
}
