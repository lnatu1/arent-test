import Chart from '/src/ui/Chart'
import {
    Container,
    FoodWrapper,
    FoodGoal,
    FoodGoalProgress,
    FoodGoalTotal,
    GlowCircle
} from '/src/styles/Banner.js'

export default function Banner() {
    return (
        <Container>
            <FoodWrapper>
                <img src='/home/food.jpg' alt='food'/>
                <FoodGoal>
                    <FoodGoalProgress>05/21</FoodGoalProgress>
                    <FoodGoalTotal>75%</FoodGoalTotal>
                    <GlowCircle>
                        <img src='/glow-circle.svg' alt='glow circle'/>
                    </GlowCircle>
                </FoodGoal>
            </FoodWrapper>
            <Chart/>
        </Container>
    )
}