import styled from "styled-components";

export const SearchTypeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 98%;
`
export const SearchTypeNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NavigationList = styled.ul`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    align-items: center;

    @media (max-width: 65.25rem) { 
        grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: 40.94rem) {
        grid-template-columns: repeat(3, 1fr);
    }
`
export const NavigationItems = styled.li`
    list-style: none;
    color: #fff;
    margin: .4rem;
    font-size: 1rem;
    padding: .2rem 1.5rem;
    border-radius: .4rem;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    width: auto;

    &:hover {
    cursor: pointer;
}
`

//Pokemon

export const PokemonContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
    width: 98%;
    padding: .2rem;
    margin: 1.75rem auto 2.5rem;

    @media (max-width: 61.25rem) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 40.94rem) {
        grid-template-columns: 1fr;
    }
`

export const PokemonCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    height: 19rem;
    margin: .2rem;
    margin-top: 10rem;
    border-radius: 2rem;
    animation: fade .8s;

    @keyframes fade {
    from {
        opacity: 0;
        transform: translate3d(0, -32px, 0);
    }
    to {
        opacity: initial;
        transform: initial;
    }
}
`
export const PokemonInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: .4rem;
    margin-top: -10rem;

    img {
        width: 15rem;
    }
`

export const PokemonID = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
`
export const PokemonName = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
    text-transform: capitalize;
`
export const PokemonTypes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TypesItems = styled.span`
    color: #fff;
    margin: .4rem;
    font-size: 1rem;
    padding: .2rem 1.5rem;
    border-radius: .4rem;
    text-transform: capitalize;
`

export const PokemonBodyDetails = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    margin: .2rem;
    padding: .2rem;
    border-radius: .4rem;
    color: #fff;
`
export const SvgDetails = styled.span`
    margin-right: .5rem;
`
export const TextDetails = styled.p`
    padding: .2rem;
`

export const MoreDetailsButton = styled.button`
    cursor: pointer;
    height: 3.5rem;
    width: 100%;
    outline: none;
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    color: #fff;
    transition: .2s;
    background-image: none; //Ainda ta aparendo
    border-radius: 0 0 2rem 2rem;
    text-shadow: 1px 1px 5px #000;
`
