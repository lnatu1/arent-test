import styled from "styled-components";

const BrandButton = styled.button`
    background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
    border: none;
    color: var(--color-white);
    padding: 14px 0;
    max-width: 296px;
    width: 100%;
    border-radius: 5px;
    display: inline-block;
`

export default function Button({action}) {
    return (
        <BrandButton onClick={action}>記録をもっと見る</BrandButton>
    )
}