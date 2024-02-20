import { RecommendGrid, RecommendItem, Title, Text } from '/src/styles/Recommend'

export default function Item() {
    const data = [
        {
            title: 'RECOMMENDED COLUMN',
            text: 'オススメ'
        },
        {
            title: 'RECOMMENDED DIET',
            text: 'ダイエット'
        },
        {
            title: 'RECOMMENDED BEAUTY',
            text: '美容'
        },
        {
            title: 'RECOMMENDED HEATH',
            text: '健康'
        }
    ]
    return (
        <RecommendGrid>
            {data.map((item, index) => (<RecommendItem key={index}>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
            </RecommendItem>))}
        </RecommendGrid>
    )
}