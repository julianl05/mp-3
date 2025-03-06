import styled from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #222831;
    padding: 1vh 1vw;
    color: #ffffff;
`
const StyledLink = styled(Link)`
    color: #ffffff;
`

export default function Footer(){
    return (
        <StyledFooter>
            <p>All Rights Reserved by Julian Lim Jun Ren. <StyledLink to={`/credits`}> Credits</StyledLink> &copy;</p>
        </StyledFooter>
    );
}