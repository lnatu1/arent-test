import Banner from '/src/ui/Banner'
import SampleFood from '/src/ui/SampleFood'
import Button from '/src/components/Button'
import { TextAlign } from '/src/styles/Utils'

export default function Home() {
    return (
        <>
            <Banner />
            <SampleFood />
            <TextAlign align="center">
                <Button />
            </TextAlign>
        </>
    )
}