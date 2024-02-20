import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 24px auto;
`
const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`
const GalleryItem = styled.div`
    position: relative;
`
const GalleryBadge = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-warning);
    color: var(--color-white);
    padding: 8px;
    font-size: 1.5rem;
    line-height: 1.8rem;
`

export {
    Wrapper,
    Grid,
    GalleryItem,
    GalleryBadge,
}