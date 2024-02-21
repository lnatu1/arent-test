import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {BaseWrapper} from '/src/styles/Utils'

const StyledNav = styled.nav`
    background-color: var(--color-dark-1);
`
const Inner = styled(BaseWrapper)`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media only screen and (max-width: 1000px) {
        padding: 0 25px;
    }
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
    @media only screen and (max-width: 768px) {
        gap: 20px;
    }
`
const NavItem = styled.li`
    position: relative;
`
const NavNoti = styled.div`
    position: absolute;
    top: -5px;
    left: 15px;
    color: var(--color-white);
    background-color: var(--color-primary-500);
    border-radius: 50%;
    font-size: 10px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NavToggle = styled.div`
    width: 26px;
    padding: 8px 0;
    cursor: pointer;
    position: relative;

    & > .bar {
        width: 100%;
        height: 3px;
        background-color: var(--color-primary-400);
        transition: all .3s ease;
    }

    & > div:nth-child(2) {
        margin: 5px 0;
    }

    &.active {
        & > .bar:first-child {
            transform: translateY(8px) rotate(45deg);
        }

        & > .bar:nth-child(2) {
            opacity: 0;
        }

        & > .bar:nth-child(3){
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
        margin-left: 8px;
    }
    
    &.active > span {
        color: var(--color-primary-400);
    }
    
    @media only screen and (max-width: 992px) {
        & > span {
            font-size: 1rem;
        }
        
        & > img {
            width: 20px;
        }
    }

    @media only screen and (max-width: 614px) {
        & > span {
            font-size: 8px;
        }

        & > img {
            width: 15px;
        }
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
    NavNoti,
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