import { DiaryItem, DiaryText, DiaryDateTime } from '/src/styles/Diary'

export default function Diary({diary}) {
    return (
        <DiaryItem>
            <DiaryDateTime>{diary.date}<br/>{diary.time}</DiaryDateTime>
            <DiaryText>{diary.text}</DiaryText>
        </DiaryItem>
    )
}