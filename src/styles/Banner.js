import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 31.6rem;
`
const FoodWrapper = styled.div`
    flex: 0 0 54rem;
    position: relative;
    
    & > img {
        height: 100%;
        object-fit: cover;
    }
`
const FoodGoal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-white);
    text-shadow: 0px 0px 6px rgba(252, 116, 0, 1);
    display: flex;
    align-items: center;
    gap: 4px;
`
const FoodGoalProgress = styled.div`
    font-size: 1.8rem;
    line-height: 2.2rem;
`
const FoodGoalTotal = styled.div`
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: -10px;
`
const GlowCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
`

export {
    Container,
    FoodWrapper,
    FoodGoal,
    FoodGoalProgress,
    FoodGoalTotal,
    GlowCircle
}