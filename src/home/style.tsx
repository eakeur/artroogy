import { Link } from "react-router-dom"
import styled from "styled-components"

export const Main = styled.main`
    @media(min-width: 861px) {
        height:100vh;
    
        overflow:hidden;
        display:flex;
        align-items:stretch;
        box-sizing:border-box;
    }
`

export const ImageLink = styled(Link)<{color: string}>`
    width:100%;
    display: block;

    color:white;
    font-weight:900;
    word-spacing:100vw;
    text-transform:uppercase;
    text-decoration:none;

    transition:500ms;

    img {
        width:100%;
        object-fit:cover;
        transition:200ms;
    }

    span {
        display: block;
        margin: 30px;
    }

    :hover {
        img {
            filter:brightness(50%);
        }
    }

    @media(min-width: 861px) {
        background:${props => `linear-gradient(#000000, #000000 50%, ${props.color} 50%, ${props.color})`};
        background-size:100% 200%;

        font-size:2.8rem;

        img {
            height:100%;

            @media(max-width: 1170px){
                object-position:35% 100%;
            }
        }

        :hover {
            background-position:100% 100%;
            width:115%;
        }
    }

    @media(max-width: 860px) {
    font-size:2rem;

        img {
            height: calc(100vh - 300px);
            object-position:50% 20%;
        }

        span {
            z-index:1;
            position: absolute;
        }
    }

    
`