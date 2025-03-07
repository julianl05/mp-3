import styled from "styled-components"; 
import {StyledMain, StyledH3Title} from "./ui-components/sharedStyledComponents";
import { useEffect } from "react";

const StyledProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row; /* flex direction set to row so that the profile picture and about section are side by side */
    padding: 1vh 1vw;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

const StyledProfilePic = styled.img`
    max-width: 100%;
    border-radius: 10%;
    margin: 1vh 1vw;
    margin-right: 3vw;

    @media screen and (max-width: 800px) {
        display: flex; /* display set to flex so that the image is centered */
        max-width: 70%;
        margin: auto;  /*also needed to center image*/
        margin-bottom: 3vh;
    }
`

const StyledProfilePicContainer = styled.div`
    width: 40%;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: auto; 
    }
`

const StyledAboutContainer = styled.div`
    width: 65%;
    margin: 1vh 1vw;
    margin-left: 3vw;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: auto;
    }
`

const StyledIntroText = styled.p`
    margin: 1vh 1vw;
`


export default function Home(){
    useEffect(() => {
        document.title = "Resume | Home";
    }, []);
    return (
        <StyledMain>
            <StyledH3Title>Home</StyledH3Title>
            <StyledProfileContainer>
                <StyledProfilePicContainer>
                    <StyledProfilePic src="/profile.JPG" alt="Profile Picture"/>
                </StyledProfilePicContainer>
                <StyledAboutContainer>
                    <p>Hi! My name is Julian Lim Jun Ren and I am currently a junior studying computer science at Boston University. 
                        Right now, my foremost career interest is web application development, as I hope to build software that will be used to impact the real world. I'm also deeply passionate about the video game industry :D.
                    </p>
                </StyledAboutContainer>
            </StyledProfileContainer>
            <StyledIntroText>On this website, you'll find the contents of my resume displayed in a more orderly manner, its section headers split into their own individual pages. 
                This website also serves as a practice in building a responsive website viewable on all manners of devices.
            </StyledIntroText>
        </StyledMain>
    );
}