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
        // M0 100 L100 100 M100 100 L100 0 M100 0 L0 0 M0 0 L0 100
        <HomeSection {...ScreenTransition} id='home' title='Ygor Rodrigues | Portfólio'>
            <PresentationSection ref={ref}>
                <motion.span {...item}>Olá, eu sou</motion.span>
                <AppealingTitle {...item}>Ygor Rodrigues</AppealingTitle>
                <AnimatedButton {...item} tabIndex={0} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className='stroke' >
                        <motion.path
                            d="M0 0 L300 0 M300 0 L300 100 M300 100 L0 100 M0 100 L0 0"
                            variants={icon} initial="hidden" animate="visible" transition={transition}>
                        </motion.path>
                    </svg>
                    <span>este é meu portfólio</span>
                </AnimatedButton>
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

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    span: {
        position: 'absolute'
    }
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

const transition = {
    default: { 
        duration: 1.8, 
        repeatDelay: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: 'reverse', 
    },
    fill: { 
        duration: 1.8, 
        repeatDelay: 1,
        ease: [1, 0, 0.8, 1],
        repeat: Infinity,
        repeatType: 'reverse', 
    }
}

const icon = {
    hidden: {
        y: 0,
        opacity: 1,
        fill: "rgba(255, 255, 255, 0)",
        pathLength: 0,
    },
    visible: {
        y: 5,
        opacity: 1,
        fill: "rgba(255, 255, 255, 1)",
        pathLength: 1,
    }
  }