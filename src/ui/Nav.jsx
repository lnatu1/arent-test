import Logo from '/src/ui/Logo'
import {
    Inner,
    Link,
    NavList,
    NavItem,
    NavToggle,
    NavListWrapper,
    StyledNav
} from '/src/styles/Nav'

export default function Nav() {
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
                        </NavItem>
                    </NavList>
                    <NavToggle>
                        <div></div>
                        <div></div>
                        <div></div>
                    </NavToggle>
                </NavListWrapper>
            </Inner>
        </StyledNav>
    )
}