import styled from "styled-components";
import { StyledMain, StyledH3Title } from "./ui-components/sharedStyledComponents";

const StyledActivitiesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 4%;
`

const StyledActivitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-bottom: 2vh;
     
    h4 {
        margin-bottom: 1vh;
    }

    ul {
        border-left: 5px solid #222831;
        border-radius: 1px;
        list-style: none;
        padding: 1vh 1vw;
        margin-left: 2%;
    }
    
    @media screen and (max-width: 800px) {
        h4 {
            text-align: center;
            margin-bottom: 1vh;
        }
        
        ul {
            border-right: 5px solid #222831;
            border-radius: 5px;
            text-align: center;
        }
    }
`


export default function Activities(){
    return (
        <StyledMain>
            <StyledH3Title>Activities</StyledH3Title>
            <StyledActivitiesSection>
                <StyledActivitiesContainer>
                    <h4>Clubs</h4>
                    <ul>
                        <li>Hack4Impact Impact Team</li>
                        <li>BU Mars Rover Club</li>
                        <li>BU Competitive Badminton Team</li>
                    </ul>
                </StyledActivitiesContainer>
                <StyledActivitiesContainer>
                    <h4>Volunteering</h4>
                    <ul>
                        <li>Assistant Badminton Coach at Shanghai DC Badminton Academy</li>
                    </ul>
                </StyledActivitiesContainer>
                <StyledActivitiesContainer>
                    <h4>Hobbies</h4>
                    <ul>
                        <li>Building Keyboards</li>
                        <li>Playing Video Games</li>
                        <li>Reading</li>
                    </ul>
                </StyledActivitiesContainer>
            </StyledActivitiesSection>
        </StyledMain>
    );
}