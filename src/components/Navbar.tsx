import styled from "styled-components";
import {Link} from "react-router";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column; /* make navbar stacked vertically */
    background-color: #31363F;
    width: 30%;

    @media screen and (max-width: 800px) {
        width: 100%; 
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* space out navbar buttons evenly */
    list-style: none;
    padding: 0px; /*remove the whitepsace at the left of ul elements */
    margin: 0px; /*remove the whitepsace at the left of ul elements */
    height: 100%; 

    @media screen and (max-width: 800px) {
        padding: 1%; /* minimising padding to fit all navbar buttons in space*/
        width: 100%;
        display: flex;
        flex-direction: row; /* make navbar buttons side by side on mobile*/
        justify-content: space-evenly; 
    }
`

const StyledLi = styled.li`
    margin: 2vh 10%; /* in combination with parent's space-evenly to ensure good spacing */
    font-size: calc(5px + 2vw);
    height: 100%; /* li height set to 100% so if screen height increases, the anchors set to height 100% can increase too*/

    @media screen and (max-width: 800px) {
        margin: 0;
        font-size: calc(5px + 0.8vw); /* smaller font size to accomodate narrower space*/
    }
`

const StyledLink = styled(Link)`
    display: flex;
    text-align: center; /* center navbar text */
    justify-content: center; /*center navbar text both vertically (because its a column not row)*/
    align-items: center; /* and horizontally */
    background-color: #9ae0e4; /* filled background to make anchor tags look like buttons */
    text-decoration: none; /*removing underline from links */
    font-weight:bold; /* making navbar have bold text for clarity */
    color: rgb(0, 0, 0);
    border-radius: 10px;
    width: 100%; /* width and height set to 100% so that the anchor take up the full width and height of the parent li element */
    height: 100%;
    padding: 3vh; /* padding to make anchor tags bigger and clickable like buttons*/

    &:hover{ /* using hover pseudoclass to make navbar buttons lighter when hovering over them*/
        background-color: #cff2f5;
    }
    
    &:active { /* using active pseudoclass to make navbar buttons darker on click to simulate button press*/
    background-color: #93adaf;
    }

    @media screen and (max-width: 800px) {
        padding: 1vw;
        border-radius: 0px;;
        border: 1px solid #283738; /* small border on mobile to make navbar buttons a little clearer */
    }
`

export default function Navbar(){
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/activities`}>Activities</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}