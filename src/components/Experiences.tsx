import styled from "styled-components";
import { StyledMain, StyledH3Title } from "./ui-components/sharedStyledComponents";
import { useEffect } from "react";

const StyledExperiencesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`
const StyledExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 4%;
    border-radius: 10px;
`
const StyledOrganisationLocationDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* using space between to make the location be to the far left but on the same line as the organisation name*/

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const StyledTitleDateDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

    @media screen and (max-width: 800px) {
        margin-bottom: 1vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const StyledH4 = styled.h4`
    font-weight: normal;
`

export default function Experiences(){
    useEffect(() => {
        document.title = "Resume | Experiences";
    }, []);
    return (
        <StyledMain>
            <StyledH3Title>Work Experience</StyledH3Title>
            <StyledExperiencesSection>
                <StyledExperienceContainer>
                    <StyledOrganisationLocationDiv>
                        <h4>Signify</h4>
                        <StyledH4>Hong Kong</StyledH4>
                    </StyledOrganisationLocationDiv>
                    <StyledTitleDateDiv>
                        <StyledH4>Software R&D Summer Intern</StyledH4>
                        <StyledH4>6/2024 - 8/2024</StyledH4>
                    </StyledTitleDateDiv>
                    <ul>
                        <li>Served as a member of a R&D project team specializing in improving customer experience for large scale installations (~100) of IoT smart LED lights.</li>
                        <li>Wrote <strong>Javascript</strong> and <strong>Python</strong> scripts for MQTT.fx, Apache JMETER, and Locust that automated MQTT, UDP, and ESP-Now connectivity testing for lights controlled through the WiZ Connected mobile app. </li>
                    </ul>
                </StyledExperienceContainer>
                <StyledExperienceContainer>
                    <StyledOrganisationLocationDiv>
                        <h4>NYU Shanghai</h4>
                        <StyledH4>Shanghai, China</StyledH4>
                    </StyledOrganisationLocationDiv>
                    <StyledTitleDateDiv>
                        <StyledH4>Apprentice Programmer</StyledH4>
                        <StyledH4>7/2021 - 8/2021</StyledH4>
                    </StyledTitleDateDiv>
                    <ul>
                        <li>Contributed to a python-based search engine utilizing <strong>gRPC</strong> and <strong>bert_as_a_service</strong> during a span of 4 weeks.</li>
                        <li>Incorporated elements of pattern recognition to teach search engines to present relevant results.</li>
                    </ul>
                </StyledExperienceContainer>
            </StyledExperiencesSection>
        </StyledMain>
    );
}