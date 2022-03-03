import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FooterOnLocationChange } from "../../common/rendering";

export function Footer(){
    let loc = useLocation()
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        FooterOnLocationChange(loc, ref)
    }, [loc])

    return (
        <PageFooter ref={ref}>
            <BrandSpan>Produzido por Eakeur ®</BrandSpan>
        </PageFooter>
    )
}

const PageFooter = styled(motion.footer)(props => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    fontSize: 14,
    paddingBlockEnd: '20px', 
    transition: '500ms',
    '@media (max-width: 720px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

const BrandSpan = styled(motion.span)(props => ({
    marginInlineEnd: 50,
    '@media (max-width: 720px)': {
        marginInlineEnd: 0,
    },
}))

