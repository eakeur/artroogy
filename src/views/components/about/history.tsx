import styled from "styled-components";

export function History(props: {title: string, children: JSX.Element[]}){
    return (
        <StyledSection title={props.title}>
            <h4>{props.title}</h4>
            <HistoryList>
                {props.children}
            </HistoryList>
        </StyledSection>
    )
}

type Detail = string | JSX.Element
export function HistoryListItem(props: {name: string, description?: string, detail?: Detail[]}){
    return (
        <li>
            {props.name}
            {props.description && <span>{props.description}</span>}
            {props.detail && props.detail.map((d, idx) => (<span key={idx} className="detail">{d}</span>))}
        </li>
    )
}

const StyledSection = styled.section((props) => ({
    
}))

const HistoryList = styled.ul(props => ({
    color: 'var(--golden)',
    paddingLeft: 0,
    listStyleType: 'none',

    'li': {
        marginBlockEnd: 10,
    },

    'span': {
        display: 'block',
        color: 'white'
    },

    '.detail': {
        fontSize: 14,
    }
}))