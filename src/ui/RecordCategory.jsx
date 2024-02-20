import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 48px;
    margin: 56px 0;
`
const RecordItem = styled.div`
    position: relative;
    border: 20px solid var(--color-warning);
    background: black;
    flex: 1;
    img {
        width: 100%;
        mix-blend-mode: luminosity;
    }
`
const RecordContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`
const RecordTitle = styled.div`
    text-transform: uppercase;
    color: var(--color-warning);
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 0.13px;
`
const RecordBadge = styled.div`
    color: var(--color-white);
    background-color: var(--color-brand);
    display: inline-block;
    margin-top: 10px;
    padding: 0 20px;
    font-size: 1.4rem;
`

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