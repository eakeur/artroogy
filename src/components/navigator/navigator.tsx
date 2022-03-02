import { useEffect, useState } from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { JsxElement } from "typescript";
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

export function Navigator(props: NavigatorProps){
    return (
        <StyledNavigator>
            {props.routes.map((r) => (<NavLink {...r}/>))}
        </StyledNavigator>
    )
}


export function NavLink(props: NavLinkProps){
    let resolved = useResolvedPath(props.path);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link to={props.path} className={match ? 'animal-print' : ''}>{props.name}</Link>
    )
}

interface NavLinkProps {name: string, path: string, comp: JSX.Element}
interface NavigatorProps {
    routes: NavLinkProps[]
}