import styled from "styled-components"; 
import {StyledMain, StyledH3Title} from "./SharedStyles";

const StyledEducationSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`
const StyledEducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 4%;
    border-radius: 10px;
`
const StyledH4 = styled.h4`
    margin-bottom: 1vh;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`
const StyledP = styled.p`
    margin-left: 1vw;
`
export default function Education(){
    return (
        <StyledMain>
            <StyledH3Title>Educational Record</StyledH3Title>
            <StyledEducationSection>
                <StyledEducationContainer>
                    <StyledH4>Boston University</StyledH4>
                    <StyledP><strong>Location: </strong> Boston, Massachusetts, USA </StyledP>
                    <StyledP><strong>Degree: </strong>BA in Computer Science, Statistics Minor</StyledP>
                    <StyledP><strong>Graduation Date: </strong>Expected May 2026</StyledP>
                    <StyledP><strong>GPA: </strong>4.00</StyledP>
                    <StyledP><strong>Dean's List: </strong>All Semesters</StyledP>
                    <StyledP><strong>Relevant Coursework: </strong>
                        Data Structures & Algorithms, Software Engineering, Artificial Intelligence, Linear Algebra, 
                        Combinatoric Structures, Algorithmic Analysis, Distributed Systems, Operating Systems, Object-Oriented Programming, Statistical Analysis
                    </StyledP>
                </StyledEducationContainer>
                <StyledEducationContainer>
                    <StyledH4>Shanghai American School</StyledH4>
                    <StyledP><strong>Location: </strong> Shanghai, China </StyledP>
                    <StyledP><strong>Degree: </strong>HS Diploma</StyledP>
                    <StyledP><strong>Graduation Date: </strong>May 2022</StyledP>
                    <StyledP><strong>GPA: </strong>3.98</StyledP>
                </StyledEducationContainer>
            </StyledEducationSection>
        </StyledMain>
    );
}