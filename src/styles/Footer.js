import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Footer = styled.footer`
    background-color: var(--color-dark-1);
    padding: 56px 0;
    margin-top: 64px;
`
const List = styled.ul`
    color: var(--color-white);
    font-size: 1.1rem;
    line-height: 1.6rem;
    letter-spacing: 0.03px;
    display: flex;
    align-items: center;
    gap: 45px;
`
const Link = styled(NavLink)`
`

export { Footer, List, Link }