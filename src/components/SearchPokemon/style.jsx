import styled from "styled-components";

export const SearchContainer = styled.section`
    width: 98%;
    border-radius: .4rem;
    margin-bottom: 2rem;
    margin: 0;
`
export const SearchHeader = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 100%;
    border-radius: .4rem;
    margin-bottom: .4rem;
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
`
export const SearchInput = styled.input`
    text-align: center;
    border: none;
    outline: none;
    height: 2.3rem;
    width: 15rem;
    border-radius: .4rem;
`
export const SearchButton = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    height: 2.3rem;
    border-radius: .4rem;
    margin-left: .4rem;
    width: 5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
    background: #fb1;
    text-shadow: 1px 1px 5px #000;
`

export const SearchCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 29rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: .4rem;

    opacity: 0;
    transform: translateX(-20px);
    animation: animation .3s forwards;

    @keyframes animation{
        to{
            opacity: 1;
            transform: initial;
        }
    }

    @media (max-width: 65.25rem) {
        width: 100%; 
    }

    @media (max-width: 25.94rem) {
        height: 35rem;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export const PokemonInfo= styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 25rem;
    width: 15rem;

    @media (max-width: 45.94rem){
        height: auto;
    }

    @media (max-width: 25.94rem){
        margin-top: 0;
        width: auto;
    }
`
export const PokemonID = styled.span`
    margin: 0;
    padding: 0;
    opacity: .1;
    width: auto;
    color: #fff;
    font-size: 9rem;
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

    @media (max-width: 45.94rem){
        text-align: center;
    }
`

export const PokemonTypes = styled.span`
    color: #fff;
    margin: .4rem;
    text-align: center;
    width: auto;
    font-weight: bold;
    font-size: 1rem;
    padding: .2rem 1.5rem;
    border-radius: .4rem;
    text-transform: capitalize;
    text-shadow: 1px 1px 5px #000;

    @media (max-width: 45.94rem){
        margin: .3rem auto;
    }

   
`

export const MoreDetails = styled.button`
    cursor: pointer;
    height: 3.5rem;
    margin-top: 2rem;
    width: 100%;
    outline: none;
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    color: #fff;
    transition: .2s;
    background-image: none;
    border-radius: 2rem;
    text-shadow: 1px 1px 5px #000;

    @media (max-width: 45.94rem){
        margin: .2rem auto;
        height: 2rem;
        width: 200px;
        font-size: 1.2rem;
    }

    @media (max-width: 25.94rem){
        height: 2rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
`

export const ContainerImage = styled.div`
    width: 29rem;
    margin-top: -3rem;
`

export const PokemonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: drop-shadow(0 0 0.75rem rgb(57, 55, 56));

    @media (max-width: 35.94rem) {  
        width: 300px;   
    }

    @media (max-width: 25.94rem){
        width: 100%;
    }
`

export const NullContent = styled.div``