import {
    Wrapper,
    GalleryItem,
    GalleryItemWrapper,
    GalleryBadge,
    GalleryDesc,
    GalleryTag,
    RecommendGrid
} from '/src/styles/Gallery'

export default function Gallery({ record }) {
    console.log(record)
    return (
        <Wrapper>
            <RecommendGrid>
                { record.map(item => (
                    <GalleryItemWrapper key={item.id}>
                        <GalleryItem>
                            <div>
                                <img src={item.src} alt='food 1'/>
                            </div>
                            <GalleryBadge>{item.label}</GalleryBadge>
                        </GalleryItem>
                        {item.desc && <div>
                            <GalleryDesc>{item.desc.text}</GalleryDesc>
                            <div>
                                {item.desc.tags.map(tag => <GalleryTag key={tag} href="#">#{tag}</GalleryTag>)}
                            </div>
                        </div>}
                    </GalleryItemWrapper>
                )) }
            </RecommendGrid>
        </Wrapper>
    )
}