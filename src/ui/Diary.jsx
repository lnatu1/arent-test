import {getDiary} from '/src/services/api'
import {DiaryHeading,DiaryGrid, DiaryWrapper} from '/src/styles/Diary'
import DiaryItem from '/src/components/DiaryItem'
import Button from "../components/Button.jsx";
import {TextAlign} from "../styles/Utils.js";
import {useEffect, useState} from "react";

export default function Diary() {
    const [diary, setDiary] = useState([])
    const fetchData = async () => {
        const data = await getDiary();
        setDiary(data)
    };

    useEffect(() => {
        fetchData();
    }, [])
    const loadMoreRecords = async () => {
        const data = await getDiary();
        setDiary([...diary, ...data])
    }
    return (
        <DiaryWrapper>
            <DiaryHeading>MY DIARY</DiaryHeading>
            <DiaryGrid>
                {diary.map(d => <DiaryItem diary={d} key={d.id} />)}
            </DiaryGrid>
            <TextAlign align="center">
                <Button text={'記録をもっと見る'} action={loadMoreRecords}/>
            </TextAlign>
        </DiaryWrapper>
    )
}