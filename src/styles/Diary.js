import styled from 'styled-components'

const DiaryWrapper = styled.div`
    margin-top: 56px;
    color: var(--color-dark-4);
`
const DiaryGrid = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`
const DiaryItem = styled.div`
    padding: 16px 16px 25px;
    border: 2px solid #707070;
    flex: 0 0 calc(25% - 9px);
    
    @media only screen and (max-width: 768px) {
        flex: 0 0 calc(50% - 9px);
    }

    @media only screen and (max-width: 576px) {
        flex: 0 0 100%;
    }
`
const DiaryDateTime = styled.div`
    font-size: 1.8rem;
    line-height: 2.2rem;
`
const DiaryText = styled.div`
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-top: 8px;
`
const DiaryHeading = styled.div`
    font-size: 2.2rem;
    line-height: 2.7rem;
    margin-bottom: 4px;
`

export {
    DiaryHeading,
    DiaryWrapper,
    DiaryItem,
    DiaryDateTime,
    DiaryGrid,
    DiaryText,
}