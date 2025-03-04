import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: #EEEEEE;
    color: #000000;
    width: 80%;
    padding: 3vh 3vw; /* thicker padding in main to ensure readability */
    font-size: calc(5px + 1vw);
    height: auto; /* using height auto and min-height so page extends according to content but still has a baseline */
    min-height: 100vh;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: auto; /* using height auto and min-height so page extends according to content */
        min-height: 80vh;
        padding: 1vh 4vw;
        font-size: calc(5px + 1.5vw);
    }
`

export const StyledH3Title = styled.h3`
    text-align: center;
    margin-bottom: 2vh;  /* adds a bit of separation to make it clearer that this is the page title*/

    @media screen and (max-width: 800px) {
        margin-bottom: 1vh;
    }
`