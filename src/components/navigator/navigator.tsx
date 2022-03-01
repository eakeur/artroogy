import { Link } from "react-router-dom";
import styled from "styled-components";
import { AboutRoute } from "../about/about";
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
        textDecorationLine: 'none',
    }
}));

export function Navigator(){
    return (
        <StyledNavigator>
            <Link to={HomeRoute}>INÍCIO</Link>
            <Link to={AboutRoute}>SOBRE MIM</Link>
            <Link to={GalleryRoute}>GALERIA</Link>
            <Link to='/contato'>CONTATO</Link>
        </StyledNavigator>
    )
}