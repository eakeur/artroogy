import { motion } from "framer-motion"
import styled from "styled-components"

export function AnimatedBorder(){
    return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
            <motion.path d={PathDesign} initial="hidden" animate="visible" variants={ButtonBorderAnimation} transition={TransitionSettings}/>
        </SVG>
    )
}

const PathDesign = 'M0 0 L300 0 M300 0 L300 100 M300 100 L0 100 M0 100 L0 0'

const SVG = styled.svg(_ => ({
    height: 70,
    overflow: 'visible',
    stroke: '#fff',
    backgroundColor: 'black',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    transition: '500ms',
}))

const TransitionSettings = {
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

const ButtonBorderAnimation = {
    hidden: {
        y: 0,
        opacity: 1,
        fill: "rgba(255, 255, 255, 0)",
        pathLength: 0,
    },
    visible: {
        y: 5,
        x: 5,
        opacity: 1,
        fill: "rgba(255, 255, 255, 1)",
        pathLength: 1,
    }
}