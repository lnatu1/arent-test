import styled from 'styled-components'

const StyledLogo = styled.div`
    padding: 0 16px;
    
    & > img {
        display: block;
        margin-top: 8px;
    }
`

export default function Logo() {
    return (
        <StyledLogo>
            <img src='logo.svg' alt='heathy app logo'/>
        </StyledLogo>
    )
}