import styled from "styled-components";

export function Habilities(props: {title: string, children: JSX.Element[]}){
    return (
        <HabilitySection>
            <h4>{props.title}</h4>
            <div style={{flexWrap: 'wrap'}}>
                {props.children}
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

export const HabilityListItem = styled.span(() => ({
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