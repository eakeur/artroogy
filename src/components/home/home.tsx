import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css';
import { AboutRoute } from '../about/about';

export const HomeRoute = '/'
export function Home(){
    const navi = useNavigate()

    const onClick = () => {
        navi(AboutRoute)
    }
    
    return (
        <HomeSection id='home'>
            <span>Olá, eu sou</span>
            <h1>Ygor Rodrigues</h1>
            <button tabIndex={0} onClick={onClick}>E este é meu portfólio</button>
        </HomeSection>
    )
}

const HomeSection = styled.section(props => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/assets/ygor_stage.png')",
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: 'center',
    "h1": {
        margin: '10px',
        fontSize: '56pt',
        transition: '200ms',
        color: 'white',
        textShadow: '1px 1px 2px black',
    },
    "footer": {
        position: 'absolute',
        bottom: '10%',
    },
    "button": {
        border: 'none',
        backgroundColor: 'transparent',
        fontFamily: 'Outfit',
        color: 'white',
        fontWeight: 400,
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    
}))