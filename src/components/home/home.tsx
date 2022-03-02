import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css';
import { AboutRoute } from '../about/about';
import { hiddenVisibleAnim, ScreenTransition } from '../animations/general';

export const HomeRoute = '/'
export function Home(){
    const navi = useNavigate()

    const onClick = () => {
        navi(AboutRoute)
    }
    
    return (
        <HomeSection {...ScreenTransition} id='home' title='Ygor Rodrigues | Portfólio'>
            <motion.span {...item}>Olá, eu sou</motion.span>
            <motion.h1 {...item}>Ygor Rodrigues</motion.h1>
            <motion.button {...item} tabIndex={0} onClick={onClick}>este é meu portfólio</motion.button>
        </HomeSection>
    )
}

const HomeSection = styled(motion.section)(props => ({
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
        transition: '200ms',
        color: 'white',
        textShadow: '1px 1px 2px black',
    },
    '@media (max-width: 580px)': {
        h1: {
            fontSize: 48,
        },
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

const item = hiddenVisibleAnim({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
});
  