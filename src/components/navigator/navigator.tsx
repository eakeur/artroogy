import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AboutRoute } from "../about/about";
import { ContactRoute } from "../contact/contact";
import { GalleryRoute } from "../gallery/gallery";
import { HomeRoute } from "../home/home";


const StyledNavigator = styled.nav(props => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBlock: 20,
    marginBlockEnd: 40,
    marginInline: 10,
    textDecoration: 'uppercase',
    'a': {
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
        textDecorationLine: 'none',
        transition: 'ease-in-out 300ms'
    },

    'a:hover': {
        color: 'var(--golden)'
    }
}));

export function Navigator(){
    const [ actual, setActual ] = useState(HomeRoute)
    let location = useLocation()
    useEffect(() => {
        const v = window.location.hash.split('/');
        setActual('/' + v[v.length - 1])
    }, [location])

    return (
        <StyledNavigator>
            <Link to={HomeRoute} className={actual === HomeRoute? 'animal-print' : ''}>INÍCIO</Link>
            <Link to={AboutRoute} className={actual === AboutRoute? 'animal-print' : ''}>SOBRE MIM</Link>
            <Link to={GalleryRoute} className={actual === GalleryRoute? 'animal-print' : ''}>GALERIA</Link>
            <Link to={ContactRoute} className={actual === ContactRoute? 'animal-print' : ''}>CONTATO</Link>
        </StyledNavigator>
    )
}