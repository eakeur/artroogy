import styled from "styled-components";


const StyledFooter = styled.footer(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '10%',
    paddingBlockEnd: '20px', 

    '@media (max-width: 720px)': {
        flexDirection: 'column',
        alignItems: 'center'
    },
}))

export function Footer(){
    return (
        <StyledFooter>
            <span>Feito com ❤️ por Eakeur ®</span>
        </StyledFooter>
    )
}