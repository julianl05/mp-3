import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #222831;
    padding: 1vh 1vw;
    color: #ffffff;
`
const StyledA = styled.a`
    color: #ffffff;
`

export default function Footer(){
    return (
        <StyledFooter>
            <p>All Rights Reserved by Julian Lim Jun Ren. <StyledA href="credits.html"> Credits</StyledA> &copy;</p>
        </StyledFooter>
    );
}