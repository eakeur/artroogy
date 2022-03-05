import { motion } from "framer-motion";
import styled from "styled-components";

export function Contact(props : {name: string, reference?: string, phone?: string, email?: string}){
    return (
        <StyledContact title={props.name}>
            <h5>{props.name}</h5>
            {props.reference && <span>{props.reference}</span>}
            {props.phone && <span>{props.phone}</span>}
            {props.email && <span>{props.email}</span>}
        </StyledContact>
    )
}

export const ContactList = styled(motion.div)(props => ({}))

const StyledContact = styled(motion.section)(props => ({
    width: 'fit-content',
    boxSizing: 'border-box',
    height: '100px',
    textAlign: 'center',
    paddingBlock: 10,
    paddingInline: 30,
    border: '1px solid white',

    h5: {
        marginBlockStart: 0,
        marginBlockEnd: 5,
        fontSize: 18
    },

    span: {
        display: 'block',
        marginBlockEnd: 10,
    }
}))