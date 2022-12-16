import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
`
export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 15rem;
    background-image: linear-gradient(90deg, #24293f  0px, #060b28  50%, #24293f  100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
    border-radius: 50%;

    @keyframes skeleton {
        from{
            background-position: 0px;
        }
        to{
            background-position: -200%;
        }
    }
`
export const Image = styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: .2s;
`