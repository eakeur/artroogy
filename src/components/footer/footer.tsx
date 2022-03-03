import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AboutRoute } from "../about/about";

export function Footer(){
    let loc = useLocation()
    const [cl, setCl] = useState('')

    useEffect(() => {
        setCl(loc.pathname === AboutRoute ? 'rel' : '')
    }, [loc])
    return (
        <StyledFooter className={cl}>
            <span>Produzido por Eakeur ®</span>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer(props => ({

    position: 'fixed',
    bottom: 0,
    width: '98vw',
    display: 'flex',
    justifyContent: 'end',
    fontSize: 14,
    paddingBlockEnd: '20px', 

    '@media (max-width: 720px)': {
        flexDirection: 'column',
        alignItems: 'center'
    },
}))

