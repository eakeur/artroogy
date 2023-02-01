import { Link } from "react-router-dom"
import styled from "styled-components"


type HomeProps = {
    pages:{
        description:string,
        image:string,
        href:string,
        color:string,
    }[]
}

export function Home({pages}: HomeProps) {
    return (
        <HomeSection title="Nesta seção, selecione uma das páginas para navegar pelo mundo do Ygor">
            {
                pages.map((lnk, i) => (
                    <PageLink key={i} to={lnk.href} hovercolor={lnk.color}>
                        <p>{lnk.description}</p>
                        <img src={lnk.image} alt=""/>
                    </PageLink>
                ))
            }
        </HomeSection>
    )
}

const HomeSection = styled.section`
    @media(min-width: 861px) {
        height:100vh;
    
        overflow:hidden;
        display:flex;
        align-items:stretch;
        box-sizing:border-box;
    }
`

const PageLink = styled(Link)<{hovercolor: string}>`
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

    p {
        padding-inline: 30px;
    }

    :hover {
        img {
            filter:brightness(50%);
        }
    }

    @media(min-width: 861px) {
        background:${props => `linear-gradient(#000000, #000000 50%, ${props.hovercolor} 50%, ${props.hovercolor})`};
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

        p {
            position: absolute;
            z-index:1;
        }
    }

    
`

export const HomeRoute = "/"