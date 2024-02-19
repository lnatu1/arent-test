import styled from 'styled-components'

const TextAlign = styled.div`
    text-align: ${props => props.align};
`
const BaseWrapper = styled.div`
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
`

export {
    BaseWrapper,
    TextAlign
}