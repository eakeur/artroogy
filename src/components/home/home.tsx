import { motion } from 'framer-motion';
import { useEffect } from 'react';
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

    useEffect(() => {
        const spotlight = document.querySelector('.spotlight')! as HTMLElement;
        let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 1) 200px)';

        if (!isMobile()) {
            window.addEventListener('mousemove', e => updateSpotlight(e));

            window.addEventListener('mousedown', e => {
                spotlightSize = 'transparent 130px, rgba(0, 0, 0, 1) 150px)';
                updateSpotlight(e);
            });

            window.addEventListener('mouseup', e => {
                spotlightSize = 'transparent 160px, rgba(0, 0, 0, 1) 200px)';
                updateSpotlight(e);
            });
        } else {
            window.addEventListener('touchmove', e => {
                updateSpotlight(e);
            });
        }

        

        

        function updateSpotlight(e: any) {
            if (e.pageX && e.pageY) {
                spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
            } else if (e.targetTouches && e.targetTouches.length > 0){
                spotlight.style.backgroundImage = `radial-gradient(circle at ${e.targetTouches[0].pageX / window.innerWidth * 100}% ${e.targetTouches[0].pageY / window.innerHeight * 100}%, ${spotlightSize}`;
            }
            
        }

    }, [])
    
    return (
        <HomeSection {...ScreenTransition} id='home' title='Ygor Rodrigues | Portfólio'>
            <StyledSection className='spotlight'>
                <motion.span {...item}>Olá, eu sou</motion.span>
                <motion.h1 {...item}>Ygor Rodrigues</motion.h1>
                <motion.button {...item} tabIndex={0} onClick={onClick}>este é meu portfólio</motion.button>
            </StyledSection>
        </HomeSection>
    )
}

const StyledSection = styled.section(props => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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


function isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
  