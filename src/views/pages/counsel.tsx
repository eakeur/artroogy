import { motion } from "framer-motion"
import styled from "styled-components"
import { ScreenTransition } from "../common/animation"
import { Contact, ContactList } from "../components/counsel/contact"

export const CounselRoute = '/counsel'
export function Counsel(){
    
    return (
        <CouselSection {...ScreenTransition} id='home' title='Contatos da assessoria do Ygor'>
            <ContactList>
                {/* reference="Agência Clan27" phone="+55 (11) 98277 - 0727" */}
                <Contact name="Kléber Oliveira"  email="casting@clan27.com.br"/>
                <Contact name="Ygor Rodrigues" email="ygor.artista@gmail.com"/>
            </ContactList>
        </CouselSection>
    )
}

const CouselSection = styled(motion.section)(props => ({
    minHeight: '100vh',
    padding: 60,
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundImage: "url('/assets/gallery/coloured_back.jpeg')",
    backgroundPosition: 'bottom',
    backgroundSize: '150%',
    boxSizing: 'border-box',
    div: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    h1: {
        textTransform: 'uppercase',
        fontSize: 96,
        textOverflow: 'ellipsis'
    }
}))