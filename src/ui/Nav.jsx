import {useState} from "react";
import Logo from '/src/ui/Logo'
import {
    Inner,
    Link,
    NavNoti,
    NavList,
    NavItem,
    NavToggle,
    NavListWrapper,
    StyledNav,
} from '/src/styles/Nav'
import MenuNav from '/src/components/Menu'

export default function Nav() {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <StyledNav>
            <Inner>
                <Logo/>

                <NavListWrapper>
                    <NavList>
                        <NavItem>
                            <Link to='/record' className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                                <img src='/icons/edit.svg' alt='edit icon'/>
                                <span>自分の記録</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/reward'>
                                <img src='/icons/reward.svg' alt='reward icon'/>
                                <span>チャレンジ</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/notify'>
                                <img src='/icons/notify.svg' alt='notify icon'/>
                                <span>お知らせ</span>
                            </Link>
                            <NavNoti>1</NavNoti>
                        </NavItem>
                    </NavList>
                    <NavToggle onClick={() => setMenuVisible(!menuVisible)} className={menuVisible ? 'active' : ''}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <MenuNav visible={menuVisible}/>
                    </NavToggle>
                </NavListWrapper>
            </Inner>
        </StyledNav>
    )
}