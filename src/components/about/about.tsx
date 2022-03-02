import { motion } from "framer-motion";
import styled from "styled-components";
import { ScreenTransition } from "../animations/general";
import { Habilities } from "./habilities";
import { History } from './history'
import { Me } from "./me";

export const AboutRoute = '/sobre'

export function About(){
    return (
    <StyledSection id="about" {...ScreenTransition}>
        <Me/>
        <img src="/assets/handeye.jpeg" alt="Uma image de mim, com foco em meus olhos enquanto toco meu rosto com minhas mãos"/>
        <History/>
        <Habilities/>
    </StyledSection>)
}



const StyledSection = styled(motion.section)((props) => ({
    marginInline: '5vw', 
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: 'fit-content',
    textAlign: 'justify',
    columnGap: '5%',

    'img': {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
    },

    '@media (min-width: 1080px)': {
        'section#hab': {
            gridColumnStart: '1',
            gridColumnEnd: '4',
            gridRowStart: '2',
        }
    },

    '@media (max-width: 1080px)': {
        gridTemplateColumns: '100%',

        img: {
            order: 1,
            objectFit: 'cover',
            height: 350,
        },
    
        'section': {
            order: 2,
        }
    },


    '@media (max-width: 580px)': {
        img: {
            height: 200,
        },
    },
}));