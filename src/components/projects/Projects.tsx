import styled from "styled-components";
import { StyledMain, StyledH3Title } from "../ui-components/sharedStyledComponents";
import Calculator from "./Calculator";

const StyledProjectsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 4vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
const StyledProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding: 4%;
    background-color: #ffffff;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
const StyledProjectTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1vh;
        align-items: center;
    }
`
const StyledGithubButton = styled.button`
    width: auto;
    font-size: calc(1px + 1vw);
    color: #ffffff;
    background-color: #222831;
    border-radius: 10px;

    &:hover {
        background-color: #4c696b;
    }
    
    a {
        color: #ffffff;
        text-decoration: none;
    }
    
    @media screen and (max-width: 800px) {
        padding: 1%;
        border-radius: 5px;
    }
`
const StyledProjectFlex = styled.div`
    margin-top: 1%;
    display: flex;
    flex-direction: row;
    gap: 2vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`
const StyledProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 60%;

    @media screen and (max-width: 800px) {
        width: 80%;
        align-items: center;

        p {
            text-align: center;
        }
    }
`
const StyledIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    img {
        max-width: 15%;
    }

    @media screen and (max-width: 800px) {
        flex-direction: row;
        justify-content: center;

        img {
            max-width: 10vw;
        }
    }
`
const StyledProjectThumbnail = styled.img`
    object-fit: cover;
    max-width: 40%;
    border: 3px solid #283738;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
        max-width: 70%;
    }
`

export default function Projects(){
    return (
        <StyledMain>
            <StyledH3Title>Projects</StyledH3Title>
            <StyledProjectsSection> 
                <StyledProjectContainer> 
                    <StyledProjectTitleDiv> 
                        <h4>Song Discussion Board</h4>
                        <StyledGithubButton><a href="https://github.com/julianl05/JDT-song-discussion-board" target="_blank">Github</a></StyledGithubButton>
                    </StyledProjectTitleDiv>
                    <StyledProjectFlex>
                        <StyledProjectThumbnail src="/song-discussion-board_thumbnail2.png" alt="Song Discussion Board"/>
                        <StyledProjectInfo>
                            <p>Simple web app where 3 random songs are fetched from the Genius API each day for users to review and/or discuss.</p>
                            <p><strong>Tech Stack: </strong></p>
                            <StyledIconsDiv>
                                <img src="/html.svg" alt="HTML"/>
                                <img src="/css.svg" alt="CSS"/>
                                <img src="/react.svg" alt="reactjs"/>
                                <img src="/Express.svg" alt="expressjs"/>
                                <img src="/MongoDB.svg" alt="MongoDB"/>
                                <img src="/node.svg" alt="nodejs"/>
                            </StyledIconsDiv>
                        </StyledProjectInfo>
                    </StyledProjectFlex>
                </StyledProjectContainer>
                <StyledProjectContainer>
                    <StyledProjectTitleDiv>
                        <h4>Personal Portfolio Site</h4>
                        <StyledGithubButton><a href="https://github.com/julianl05/personal-website" target="_blank">Github</a></StyledGithubButton>
                    </StyledProjectTitleDiv>
                    <StyledProjectFlex>
                        <StyledProjectThumbnail src="/portfolio-site-thumbnail.png" alt="Personal Portfolio"/>
                        <StyledProjectInfo>
                            <p>Another online resume I built during the Hack4Impact web development workshops last semester.</p>
                            <p><strong>Tech Stack: </strong></p>
                            <StyledIconsDiv>
                                <img src="/html.svg" alt="HTML"/>
                                <img src="/css.svg" alt="CSS"/>
                                <img src="/react.svg" alt="reactjs"/>
                            </StyledIconsDiv>
                        </StyledProjectInfo>
                    </StyledProjectFlex>
                </StyledProjectContainer>
                <Calculator/>
            </StyledProjectsSection>
        </StyledMain>
    );
}