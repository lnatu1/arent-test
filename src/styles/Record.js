import styled from 'styled-components'

const ChartWrapper = styled.div`
    width: 100%;
    background-color: var(--color-dark-1);
    height: 304px;
    padding: 50px;
    position: relative;
    canvas {
        width: 100%!important;
    }
`
const ChartLabel = styled.div`
    color: var(--color-white);
    position: absolute;
    top: 16px;
    left: 24px;
    display: flex;
    align-items: center;
    gap: 15px;
`
const ChartTitle = styled.div`
    font-size: 1.5rem;
`
const ChartDate = styled.div`
    font-size: 2.2rem;
    line-height: 2.7rem;
`
const ExerciseOutter = styled.div`
    background-color: var(--color-dark-1);
    margin-top: 56px;
    padding: 56px 24px 16px 24px;
    position: relative;
`
const ExerciseWrapper = styled.div`
    display: flex;
    gap: 40px;
    height: 192px;
    overflow-y: scroll;
    padding-right: 24px;

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #777;
    }

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #777;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFCC21;
    }
`
const ExerciseList = styled.div`
    flex: 1
`
const ExerciseItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-dark-2);
    margin-bottom: 8px;
    padding-bottom: 4px;
    padding-left: 15px;
    position: relative;
    &::after {
        content: '';
        width: 7px;
        height: 7px;
        background-color: var(--color-white);
        position: absolute;
        top: 5px;
        left: 0;
        border-radius: 50%;
    }
`
const ExerciseTitle = styled.div`
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2.2rem;
`
const ExercisePeriod = styled.div`
    color: var(--color-warning);
    font-size: 1.8rem;
    line-height: 2.2rem;
`
const ExerciseExpect = styled.div`
    color: var(--color-warning);
    font-size: 1.5rem;
    line-height: 1.8rem;
`

export {
    ChartTitle,
    ChartDate,
    ChartLabel,
    ChartWrapper,
    ExerciseList,
    ExerciseItem,
    ExerciseOutter,
    ExerciseWrapper,
    ExerciseTitle,
    ExercisePeriod,
    ExerciseExpect
}