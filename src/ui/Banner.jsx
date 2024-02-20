import Chart from '/src/ui/Chart'
import {
    ChartWrapper,
    Container,
    FoodWrapper,
    FoodGoal,
    FoodGoalProgress,
    FoodGoalTotal,
    GlowCircle
} from '/src/styles/Banner.js'

export default function Banner() {
    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [95, 90, 85, 82, 72, 70, 65, 62, 58, 55, 53, 52],
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
            },
            {
                label: 'Dataset 2',
                data: [95, 93, 82, 85, 80, 75, 80, 73, 70, 70, 68, 75],
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
            },
        ],
    };
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
            <ChartWrapper>
                <Chart chartData={data}/>
            </ChartWrapper>
        </Container>
    )
}