import {
    Wrapper,
    Grid,
    GalleryItem,
    GalleryBadge,
} from '/src/styles/Gallery'

export default function Gallery({ record }) {
    return (
        <Wrapper>
            <Grid>
                { record.map(item => (
                    <GalleryItem key={item.id}>
                        <img src={item.src} alt='food 1' />
                        <GalleryBadge>{item.label}</GalleryBadge>
                    </GalleryItem>
                )) }
            </Grid>
        </Wrapper>
    )
}