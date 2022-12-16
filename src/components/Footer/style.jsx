import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 10rem;
    color: #fff;
    border-top: 1px solid #444;

    @media (max-width: 30.94rem){
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
        text-align: center;
    }
`

export const FooterContent = styled.div`
    padding: .4rem;

    @media (max-width: 30.94rem){
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;
    }
`

export const TextContent = styled.p`
    margin-top: .4rem;
`
export const LinkContent = styled.a`
    color: #fff;
    transition: .2s;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        color: #fb1;
    }
`

export const SocialIcons = styled.div`
    svg {
        cursor: pointer;
        font-size: 1.5em;
        transition: .2s;
        color: #fff;
    }
    svg:hover {
        transform: scale(120%);
    }
`

export const ListIcons = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`

export const ItemsIcons = styled.li`
    margin: 0 1rem;
`

export const LinkIcons = styled.a`
    padding: .4rem;
`