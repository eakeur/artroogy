import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { hiddenVisibleAnim, ScreenTransition } from "../common/animation"
import { useSpotlight } from "../common/spotlight"
import { AnimatedBorder } from "../components/border/border"
import { MeRoute } from "./me"

export const HomeRoute = '/'
export function Home(){

    const ref = useRef(null)
    const navi = useNavigate()
    const spotlight = useSpotlight(ref)

    useEffect(spotlight, [spotlight])
    
    return (
        <HomeSection {...ScreenTransition} id='home' title='Portfólio'>
            <PresentationSection ref={ref}>
                <motion.span {...TitleAnimation}>Olá, eu sou</motion.span>
                <AppealingTitle {...TitleAnimation}>Ygor Rodrigues</AppealingTitle>
                <AnimatedButton {...TitleAnimation} tabIndex={0} onClick={() => navi(MeRoute)}>
                    <AnimatedBorder/>
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

const TitleAnimation = hiddenVisibleAnim({
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
});