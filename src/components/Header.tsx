import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #222831;
    padding: 1vh 1vw; /* chose to use vh and vw for variable screen size responsiveness */
    width: 100%; 
    color: #EEEEEE;
    font-size: calc(1px + 1vw);
`


export default function Header() {
    return (
        <StyledHeader>
            <h1>Julian Lim Jun Ren</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}