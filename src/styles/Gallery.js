import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 24px auto;
`
const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`
const RecommendGrid = styled(Grid)`
    gap: 18px 8px;
`
const GalleryItemWrapper = styled.div`
    flex: 0 0 calc(25% - 6px);
    @media only screen and (max-width: 1000px) {
        flex: 0 0 calc(50% - 6px);
        
        img {
            width: 100%;
        }
    }
`
const GalleryItem = styled.div`
    position: relative;
    cursor: pointer;
`
const GalleryBadge = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary-300);
    color: var(--color-white);
    padding: 8px;
    font-size: 1.5rem;
    line-height: 1.8rem;
`
const GalleryDesc = styled.div`
    font-size: 1.5rem;
    color: var(--color-dark-4);
`
const GalleryTag = styled.a`
    font-size: 1.2rem;
    display: inline-block;
    color: var(--color-primary-400);
    margin-right: 10px;
`

export {
    Wrapper,
    Grid,
    GalleryDesc,
    GalleryTag,
    GalleryItem,
    GalleryItemWrapper,
    GalleryBadge,
    RecommendGrid,
}