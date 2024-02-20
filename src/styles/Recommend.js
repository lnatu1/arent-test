import styled from 'styled-components'

const RecommendGrid = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 56px;
`
const RecommendItem = styled.div`
    padding: 24px 8px;
    background-color: var(--color-dark-1);
    flex: 1;
    text-align: center;
`
const Title = styled.div`
    text-transform: uppercase;
    color: var(--color-warning);
    font-size: 2.2rem;
    line-height: 2.7rem;
    padding-bottom: 10px;
    position: relative;
    &::after {
        content: '';
        width: 56px;
        height: 1px;
        background-color: var(--color-white);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }
`
const Text = styled.div`
    color: var(--color-white);
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 300;
    margin-top: 8px;
`

export {
    Title,
    Text,
    RecommendGrid,
    RecommendItem
}