import {getRecommends} from "/src/services/api";
import RecommendCards from '/src/components/RecommendCards'
import Gallery from '/src/components/Gallery'
import {BaseWrapper, TextAlign} from '/src/styles/Utils'
import {useEffect, useState} from "react";
import Button from "/src/components/Button";

export default function Recommend() {
    const [record, setRecord] = useState([])
    const fetchData = async () => {
        const data = await getRecommends();
        setRecord(data)
    };
    const loadMoreRecords = async () => {
        const data = await getRecommends();
        setRecord([...record, ...data])
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <BaseWrapper>
            <RecommendCards/>
            <Gallery record={record}/>
            <TextAlign align="center">
                <Button text={'記録をもっと見る'} action={loadMoreRecords}/>
            </TextAlign>
        </BaseWrapper>
    )
}