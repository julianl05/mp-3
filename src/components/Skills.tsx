import styled from "styled-components";
import {StyledMain, StyledH3Title} from "./SharedStyles";

const StyledSkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSkillsTable = styled.table`
    width: 70%;
    border: 2px solid #222831; 
    border-spacing: 0; /* this removes white space between the cells so the borders of table,td,th merge into each other. looks better. */
    background-color: #ffffff;

    td {
        border: 2px solid #222831;
        padding: 1vh 1vw;
        align-content: flex-start; /*i did flex-start instead of text-align: left; to stay consistent with flexbox*/ 
    }
    
    th {
        border: 2px solid #222831;
        padding: 1vh 1vw;
    }
    
    @media screen and (max-width: 800px) {
        td {
            text-align: center; /*centering text in table for mobile view */

            ul {
                padding: 0; 
                list-style: none;/*removed all list styles and padding from list for mobile view to be cleaner.*/
            }
        }
    }
`



export default function Skills(){
    return (
        <StyledMain>
            <StyledSkillsContainer>
                <StyledH3Title>Skills</StyledH3Title>
                <StyledSkillsTable>
                    <tr>
                        <th>Technical</th>
                        <th>Languages</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>MongoDB</li>
                                <li>SQL</li>
                                <li>Git</li>
                                <li>WSL2</li>
                                <li>Linux</li>
                                <li>Windows</li>
                                <li>MacOS</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>English</li>
                                <li>Chinese</li>
                                <li>Malay</li>
                            </ul>
                        </td>
                    </tr>
                </StyledSkillsTable>
            </StyledSkillsContainer>
        </StyledMain>
    );
}