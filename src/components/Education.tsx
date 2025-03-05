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

    p {
        margin-left: 1vw;
    }
`
const StyledH4 = styled.h4`
    margin-bottom: 1vh;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`

export default function Education(){
    return (
        <StyledMain>
            <StyledH3Title>Educational Record</StyledH3Title>
            <StyledEducationSection>
                <StyledEducationContainer>
                    <StyledH4>Boston University</StyledH4>
                    <p><strong>Location: </strong> Boston, Massachusetts, USA </p>
                    <p><strong>Degree: </strong>BA in Computer Science, Statistics Minor</p>
                    <p><strong>Graduation Date: </strong>Expected May 2026</p>
                    <p><strong>GPA: </strong>4.00</p>
                    <p><strong>Dean's List: </strong>All Semesters</p>
                    <p><strong>Relevant Coursework: </strong>
                        Data Structures & Algorithms, Software Engineering, Artificial Intelligence, Linear Algebra, 
                        Combinatoric Structures, Algorithmic Analysis, Distributed Systems, Operating Systems, Object-Oriented Programming, Statistical Analysis
                    </p>
                </StyledEducationContainer>
                <StyledEducationContainer>
                    <StyledH4>Shanghai American School</StyledH4>
                    <p><strong>Location: </strong> Shanghai, China </p>
                    <p><strong>Degree: </strong>HS Diploma</p>
                    <p><strong>Graduation Date: </strong>May 2022</p>
                    <p><strong>GPA: </strong>3.98</p>
                </StyledEducationContainer>
            </StyledEducationSection>
        </StyledMain>
    );
}