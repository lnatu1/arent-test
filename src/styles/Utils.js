import styled from 'styled-components'

const TextAlign = styled.div`
    text-align: ${props => props.align};
`
const BaseWrapper = styled.div`
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    @media only screen and (max-width: 1000px) {
        padding: 0 25px;
    }
`
const Main = styled.main`
    position: relative;
`

export {
    Main,
    BaseWrapper,
    TextAlign
}