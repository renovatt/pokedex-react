import styled from "styled-components";

export const PreviewContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30rem;
    width: 98%;
    padding: .2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    border-radius: .4rem;
    
`
export const LogoContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29rem;
    width: 30%;
    border-radius: .4rem;
    background: #000;
    opacity: 0;
    transform: translateX(-20px);
    animation: animate .3s forwards;

    @keyframes animate{
        to{
            opacity: 1;
            transform: initial;
        }
    }
`
export const LogoImage = styled.img`
    height: 100%;
    object-fit: cover;
`

export const PreviewCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 68%;
    height: 29rem;
    border-radius: .4rem;

    @media (max-width: 65.25rem) {
        width: 100%; 
    }

    @media (max-width: 25.94rem) {
        height: 35rem;
        flex-wrap: wrap;
    }
`

export const LoadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29rem;
    width: 100%;
    background: #181b1d;
`
export const LoadImage = styled.img`
    height: 100%;
`

export const PreviewInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 25rem;
    width: 15rem;
    margin-top: -10rem;

    @media (max-width: 25.94rem) {   
        margin-top: 0;
        height: 10rem;
    }
`
export const PokemonID = styled.span`
    margin: 0;
    padding: 0;
    opacity: .1;
    width: auto;
    color: #fff;
    font-size: 8rem;
    font-weight: bold;
    text-align: start;

    @media (max-width: 45.94rem){
        font-size: 5rem;
        text-align: center;
    }

    @media (max-width: 25.94rem){
        font-size: 3rem;
    }
`

export const PokemonName = styled.h1`
    color: #fff;
    text-align: start;
    text-transform: capitalize;
    text-shadow: 1px 1px 5px #000;

    @media (max-width: 45.94rem) {
        text-align: center;
    }
`
export const PokemonTypes = styled.span`
    color: #fff;
    margin: .4rem;
    text-align: center;
    width: 100px;
    font-weight: bold;
    font-size: 1rem;
    padding: .2rem 1.5rem;
    border-radius: .4rem;
    text-transform: capitalize;
    text-shadow: 1px 1px 5px #000;

    @media (max-width: 45.94rem) {
        margin: .3rem auto;
    }
`

export const PreviewPokemon = styled.div`
    width: 29rem;
    margin-top: -3rem;
`

export const PreviewPokemonImage = styled.img`
    width: 460px;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0 0 0.75rem rgb(57, 55, 56));

    @media (max-width: 35.94rem) {   
        width: 300px;
    }

    @media (max-width: 25.94rem) {   
        width: 100%;
    }
`