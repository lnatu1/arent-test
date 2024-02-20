import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled(NavLink)`
    padding: 0 16px;
    
    & > img {
        display: block;
        margin-top: 8px;
    }
`

export default function Logo() {
    return (
        <StyledLogo to='/'>
            <img src='logo.svg' alt='heathy app logo'/>
        </StyledLogo>
    )
}