import styled from 'styled-components'

const HeadIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 6rem;
    margin-top: 24px;
`
const HeadIcon = styled.div`
    background: linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%);
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    padding: 30px 20px;
    text-align: center;
    color: var(--color-white);
    font-size: 2rem;
    line-height: 2.4rem;
    min-width: 135px;
    min-height: 116px;
    cursor: pointer;
`
const Icon = styled.div`
    img {
        display: inline-block;
    }
`

export { HeadIcons, HeadIcon, Icon }