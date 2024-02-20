import Chart from '/src/ui/Chart'
import Diary from '/src/ui/Diary'
import RecordCategory from '/src/ui/RecordCategory'
import {BaseWrapper} from '/src/styles/Utils'
import {
    ChartTitle, ChartDate, ChartLabel, ChartWrapper,
    ExerciseList, ExerciseItem, ExerciseOutter, ExerciseWrapper, ExerciseTitle, ExercisePeriod, ExerciseExpect
} from '/src/styles/Record'

export default function Record() {
    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [90, 85, 75, 70, 60, 62, 55, 53, 45, 42, 35, 30],
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
            },
            {
                label: 'Dataset 2',
                data: [90, 88, 65, 85, 80, 75, 65, 60, 52, 50, 45, 35],
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
            },
        ],
    };
    const sample = new Array(20).fill(null)
    return (
        <BaseWrapper>
            <RecordCategory/>
            <ChartWrapper>
                <Chart chartData={data}/>
                <ChartLabel>
                    <ChartTitle>BODY<br/>RECORD</ChartTitle>
                    <ChartDate>2021.05.21</ChartDate>
                </ChartLabel>
            </ChartWrapper>

            <ExerciseOutter>
                <ChartLabel>
                    <ChartTitle>MY<br/>EXERCISE</ChartTitle>
                    <ChartDate>2021.05.21</ChartDate>
                </ChartLabel>
                <ExerciseWrapper>
                    <ExerciseList>
                        {sample.map((item, index) => <ExerciseItem key={index}>
                            <div>
                                <ExerciseTitle>家事全般（立位・軽い）</ExerciseTitle>
                                <ExerciseExpect>26kcal</ExerciseExpect>
                            </div>
                            <ExercisePeriod>10 min</ExercisePeriod>
                        </ExerciseItem>)}
                    </ExerciseList>
                    <ExerciseList>
                        {sample.map((item, index) => <ExerciseItem key={index}>
                            <div>
                                <ExerciseTitle>家事全般（立位・軽い）</ExerciseTitle>
                                <ExerciseExpect>26kcal</ExerciseExpect>
                            </div>
                            <ExercisePeriod>10 min</ExercisePeriod>
                        </ExerciseItem>)}
                    </ExerciseList>
                </ExerciseWrapper>
            </ExerciseOutter>

            <Diary />
        </BaseWrapper>
    )
}