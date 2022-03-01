import styled from "styled-components";

export function Habilities(){
    return (
        <HabilitySection id="hab">
            <h4>Habilidades</h4>
            <div style={{flexWrap: 'wrap'}}>
                <ListItem>Cantar</ListItem>
                <ListItem>Dançar</ListItem>
                <ListItem>Dublar</ListItem>
                <ListItem>Escritor</ListItem>
                <ListItem>Poeta</ListItem>
                <ListItem>Roteirista</ListItem>
                <ListItem>Instrumentista | Viola de arco</ListItem>
                <ListItem>Muay Thai | Aprendiz</ListItem>
            </div>
        </HabilitySection>
    )
}

const HabilitySection = styled.section(() => ({
    'div': {
        padding: 0,
        paddingBlock: 10,
        display: 'flex'
    },
}))

const ListItem = styled.span(() => ({
    display: "inline",
    backgroundColor: 'var(--golden)',
    borderRadius: 100,
    paddingBlock: 10,
    paddingInline: 15,
    marginInline: 10,
    marginBlockEnd: 10,
    color: 'black',
    'span': {
        display: 'block',
        color: 'black',

    }
}));