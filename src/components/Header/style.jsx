import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
    padding: 0 4rem;
    margin-top: .8rem;

    opacity: 0;
    transform: translateX(-20px);
    animation: animation .3s forwards;

    @keyframes animation{
        to{
            opacity: 1;
            transform: initial;
        }
    }

    @media (max-width: 30.94rem){
        flex-direction: column;
        margin-bottom: 7rem;
    }
`

export const Title = styled.h1`
    font-family: 'Pokemon';
    font-size: 3rem;
    color: #fb1;
    letter-spacing: .1rem;
    text-shadow: 3px 3px 0px #fff, 5px 10px 0px #000;
`

export const Nav = styled.nav`
    svg{
        cursor: pointer;
        font-size: 1.5em;
        transition: .2s;
        color: #fff;
    }

    svg:hover {
    transform: scale(120%);
    }
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`
export const ItemList = styled.li`
     margin: 0 1rem;
`
export const Link = styled.a`
    padding: .4rem;
`
