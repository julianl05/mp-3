import styled from "styled-components";

const StyledCalculatorContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vh;
    border-radius: 10px;
    gap: 2vh;

    h4 {
        text-align: center;
    }
`
const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vh;
    justify-content: center;

    input {
        padding: 1vh 2vw;
        font-size: calc(5px + 2vw);
        border-radius: 10px;
        border: 5px solid #283738;
        width: 10vw;
        height: 5vw;
        background-color: #EEEEEE;
        text-align: center;
    }
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
        
        input {
            width: 50vw;
            height: 10vw;
        }
    }
`
const StyledButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vh;
    justify-content: center;

    button {
        padding: 1vh 2vw;
        font-size: calc(5px + 1vw);
        border-radius: 10px;
        border: 1px solid #283738;
        border-radius: 100%;
        background-color: #31363F;
        color: #ffffff;

        &:hover {
            background-color: #4a6869;
        }
        &:active {
            background-color: #283738;
        }
    }

    @media screen and (max-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;

        button {
            width: 10vw;
            font-size: calc(5px + 2vw);
        }
    }
`

const StyledClearButton = styled.button`
    padding: 1vh 2vw;
    font-size: calc(5px + 1vw);
    border-radius: 10px;
    border: 1px solid #283738;
    border-radius: 100%;
    background-color: #31363F;
    color: #ffffff;
    border-radius: 10px;

    &:hover {
        background-color: #4a6869;
    }
    &:active {
        background-color: #283738;
    }
    
    @media screen and (max-width: 800px) {
        width: 20vw;
        font-size: calc(5px + 2vw);
    }
`

const StyledOutputContainer = styled.div`
    border: 5px solid #283738;
    border-radius: 10px;
    width: 75%;
    height: 5vw;
    background-color: #283738;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        font-size: calc(5px + 2vw);
        color: #EEEEEE;
    }
    
    @media screen and (max-width: 800px) {
        width: 90%;
        height: 10vw;
        justify-content: center;
    }
`

export default function Calculator(){
    return (
        <StyledCalculatorContainer>
            <h4>JavaScript Calculator</h4>
            <StyledInputContainer>
                <input type="text" id="first-num"/>
                <input type="text" id="second-num"/>
            </StyledInputContainer>
            <StyledButtonsContainer>
                <button onClick={addition}> + </button>
                <button onClick={subtraction}> - </button>
                <button onClick={multiplication}> X </button>
                <button onClick={division}> / </button>
                <button onClick={power}> ^ </button>
            </StyledButtonsContainer>
            <StyledOutputContainer>
                <h3 id="output"></h3>
            </StyledOutputContainer>
            <StyledClearButton onClick={reset}> CLEAR </StyledClearButton>
        </StyledCalculatorContainer>
    );
}