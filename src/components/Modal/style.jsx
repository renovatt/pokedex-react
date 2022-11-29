import styled, { keyframes } from "styled-components";

export const progressBar = keyframes`
to{
    transform: initial;
}`

export const ProgressBar = styled.div`
    height: .5rem;
    border-radius: .25rem;
    width: ${(props) =>
        props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
    background: ${(props) =>
        (props.base_stat >= 50 ? '#00ff08' : '#ff0000')};
    transform: translate3d(-100%, 0, 0);
    animation: ${progressBar} 2s forwards;
`