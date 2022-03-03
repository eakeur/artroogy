import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css';
import { useSpotlight } from '../../common/spotlight';
import { AboutRoute } from '../about/about';
import { hiddenVisibleAnim, ScreenTransition } from '../../common/animation';

export const HomeRoute = '/'
export function Home(){
    const ref = useRef(null)

    const navi = useNavigate()
    const spotlight = useSpotlight(ref)

    const onClick = () => {
        navi(AboutRoute)
    }

    useEffect(spotlight, [spotlight])
    
    return (
        <HomeSection {...ScreenTransition} id='home' title='Ygor Rodrigues | Portfólio'>
            <PresentationSection ref={ref}>
                <motion.span {...item}>Olá, eu sou</motion.span>
                <AppealingTitle {...item}>Ygor Rodrigues</AppealingTitle>
                <AnimatedButton {...item} tabIndex={0} onClick={onClick}>este é meu portfólio</AnimatedButton>
            </PresentationSection>
        </HomeSection>
    )
}

const AppealingTitle = styled(motion.h1)(props => ({
    margin: '10px',
    color: 'white',
    textShadow: '1px 1px 2px black',
    '@media (max-width: 580px)': {
        fontSize: 48,
    },
}))

const AnimatedButton = styled(motion.button)(props => ({
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'Outfit',
    color: 'white',
    fontWeight: 400,
    textTransform: 'uppercase',
    cursor: 'pointer',
}))

const PresentationSection = styled(motion.section)(props => ({
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}))

const HomeSection = styled(motion.section)(props => ({
    height: '100vh',
    backgroundImage: "url('/assets/gallery/euphoria.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
}))

const item = hiddenVisibleAnim({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
});