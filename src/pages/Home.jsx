import {useState, useEffect} from "react";
import {getRecords} from "/src/services/api";
import Banner from '/src/ui/Banner'
import Button from '/src/components/Button'
import Gallery from '/src/components/Gallery'
import GalleryFilter from '/src/components/HomeGalleryFilter.jsx'
import {TextAlign, BaseWrapper} from '/src/styles/Utils'

export default function Home() {
    const [record, setRecord] = useState([])
    const [filterRes, setFilterRes] = useState([])
    const fetchData = async () => {
        const data = await getRecords();
        setRecord(data)
    };
    const loadMoreRecords = async () => {
        setFilterRes([])
        const data = await getRecords();
        setRecord([...record, ...data])
    }
    const filter = (type) => {
        const data = [...record]
        setFilterRes(data.filter(d => d.type === type))
    }
    const isFilterRes = () => filterRes.length > 0

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Banner/>
            <BaseWrapper>
                <GalleryFilter filter={filter}/>
                {isFilterRes() && <TextAlign align='right'>
                    <button onClick={() => setFilterRes([])}>
                        <img src='/icons/x.png' alt='x icon' />
                    </button>
                </TextAlign>}
                <Gallery record={isFilterRes() ? filterRes : record}/>
                <TextAlign align="center">
                    <Button action={loadMoreRecords}/>
                </TextAlign>
            </BaseWrapper>
        </>
    )
}