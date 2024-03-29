import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";


const StyledNavigator = styled.nav(props => ({
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBlock: 20,
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
            {props.routes.map((r) => (<NavLink key={r.path} {...r}/>))}
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