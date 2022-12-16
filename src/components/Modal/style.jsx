import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, .8);
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    @media (max-width: 71.25rem) {
        overflow-y: auto;
    }
`
export const ModalCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0;
    width: 80%;
    height: 22rem;
    border-radius: .4rem;
    margin-top: 6rem;
    transform: scale(0.8);
    backdrop-filter: blur(20px);
    animation: modal 0.4s forwards;
    background: rgba(6, 11, 40, 0.149);

    @keyframes modal {
        to {
            opacity: initial;
            transform: initial;
        }
    }

    @media (max-width: 71.25rem) {
        margin-top: 25rem;
        justify-content: center;
        flex-direction: column;
        height: auto;
    }

    @media (max-width: 35.94rem) {
        width: 120%;
    }

    .pokeball-icon {
        width: 10rem;
    }
`
export const ModalInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: .4rem;
    width: 35rem;

    img {
        margin-top: -15rem;
        width: 15rem;
    }
`
export const PokemonID = styled.span`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`
export const PokemonName = styled.h2`
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`
export const ModalTypes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Types = styled.span`
    color: #fff;
    margin: .4rem;
    padding: .2rem 1.5rem;
    border-radius: .4rem;
    font-size: 1rem;
    text-transform: capitalize;
`
export const ModalBody = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 35.94rem) {  
        flex-direction: column;
    }
`

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .2rem;
    font-weight: bold;
    padding: .4rem;
    width: 10rem;
    border-radius: .4rem;
    color: #fff;
`
export const SvgDetails = styled.span`
    margin-right: .5rem;
`
export const TextDetails = styled.p`
    padding: .2rem;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    margin: .4rem;
    padding: .2rem;
    width: 100%;
    border-radius: .4rem;
`
export const StatContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .2rem;
    padding: .2rem;
`
export const StatName = styled.span`
    font-weight: bold;
    font-size: .9rem;
    width: 80px;
    color: #fff;
    text-transform: capitalize;
`
export const StatValue = styled.span`
    color: #fff;
    width: 40px;
    margin-left: .4rem;
`
export const StatBar = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem;
    width: 100%;
    height: .5rem;
    border-radius: .25rem;
    background: #555;
    overflow: hidden;
`

export const ProgressBar = styled.div`
    height: .5rem;
    border-radius: .25rem;
    animation: statAnimation 2s forwards;
    transform: translate3d(-100%, 0, 0);
    width: ${(props) =>
        props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
    background: ${(props) =>
        (props.base_stat >= 50 ? '#00ff08' : '#ff0000')};

    @keyframes statAnimation {
        to{
            transform: initial;
        }
    }
`