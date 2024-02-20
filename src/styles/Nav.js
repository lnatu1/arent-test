import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {BaseWrapper} from '/src/styles/Utils'

const StyledNav = styled.nav`
    background-color: var(--color-dark-1);
`
const Inner = styled(BaseWrapper)`
    text-color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NavListWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 65px;
`
const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
`
const NavItem = styled.li`
`
const NavToggle = styled.div`
    width: 26px;
    padding: 8px 0;
    cursor: pointer;
    position: relative;

    & > .bar {
        width: 100%;
        height: 3px;
        background-color: var(--color-brand);
        transition: all .3s ease;
    }

    & > div:nth-child(2) {
        margin: 5px 0;
    }

    &.active {
        & > div:first-child {
            transform: translateY(8px) rotate(45deg);
        }

        & > div:nth-child(2) {
            opacity: 0;
        }

        & > div:last-child {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`
const Link = styled(NavLink)`
    color: var(--color-white);
    display: flex;
    align-items: center;

    & > span {
        line-height: 2.3rem;
        margin-left: .8rem;
    }
    
    &.active > span {
        color: var(--color-brand);
    }
`
const Menu = styled.div`
    background-color: var(--color-dark-2);
    position: absolute;
    top: 49px;
    right: 0;
    z-index: 2;
    min-width: 280px;
    color: var(--color-white);
    transition: all .3s ease;
    &:not(.active) {
        opacity: 0;
        visibility: hidden;   
    }
`
const MenuList = styled.ul`

`
const MenuItem = styled.li`
    font-size: 1.8rem;
    line-height: 2.6rem;
    &:not(:first-child) {
        border-top: 1px solid rgba(255,255,255,.15);
    }
`
const MenuLink = styled(NavLink)`
    padding: 22px 32px;
    display: block;
`

export {
    Inner,
    Link,
    NavList,
    NavItem,
    NavToggle,
    NavListWrapper,
    StyledNav,
    Menu,
    MenuList,
    MenuItem,
    MenuLink
}