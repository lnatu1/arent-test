import {
    Container,
    RecordContent,
    RecordTitle,
    RecordBadge,
    RecordItem,
} from '/src/styles/Record'

export default function RecordCategory() {
    return (
        <Container>
            <RecordItem>
                <img src='/record/body.png' alt='record body'/>
                <RecordContent>
                    <RecordTitle>BODY RECORD</RecordTitle>
                    <RecordBadge>自分のカラダの記録</RecordBadge>
                </RecordContent>
            </RecordItem>
            <RecordItem>
                <img src='/record/exercise.png' alt='record body'/>
                <RecordContent>
                    <RecordTitle>MY EXERCISE</RecordTitle>
                    <RecordBadge>自分のカラダの記録</RecordBadge>
                </RecordContent>
            </RecordItem>
            <RecordItem>
                <img src='/record/diary.png' alt='record body'/>
                <RecordContent>
                    <RecordTitle>MY DIARY</RecordTitle>
                    <RecordBadge>自分のカラダの記録</RecordBadge>
                </RecordContent>
            </RecordItem>
        </Container>
    )
}