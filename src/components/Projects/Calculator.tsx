import styled from "styled-components";
import {useState} from "react";
/* */
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

const StyledOutputContainer = styled.div<{outputColor: string}>`
    border: 5px solid #283738;
    border-radius: 10px;
    width: 75%;
    height: 5vw;
    background-color: #283738;

    h3 {
        font-size: calc(5px + 2vw);
        color: ${(props) => props.outputColor};
        text-align: center;
    }
    
    @media screen and (max-width: 800px) {
        width: 90%;
        height: 10vw;
        justify-content: center;
    }
`

export default function Calculator(){
    const [output, setOutput] = useState<number | null>(null); /* <number | null> asserts the type as either a number or null (its null when reset)*/
    const [outputColor, setOutputColor] = useState<string>('#EEEEEE');
    const [firstNum, setFirstNum] = useState<string>(""); 
    const [secondNum, setSecondNum] = useState<string>("");

    function addition(): void {
        const result: number = Number(firstNum) + Number(secondNum);
        if (result < 0) {
            setOutputColor('red');
        } else {
            setOutputColor('#EEEEEE');
        }
        setOutput(result);
    }
    
    function subtraction(): void {
        const result: number = Number(firstNum) - Number(secondNum);
        if (result < 0) {
            setOutputColor('red');
        } else {
            setOutputColor('#EEEEEE');
        }
        setOutput(result);
    }
    
    function multiplication(): void {
        const result: number = Number(firstNum) * Number(secondNum);
        if (result < 0) {
            setOutputColor('red');
        } else {
            setOutputColor('#EEEEEE');
        }
        setOutput(result);
    }
    
    function division(): void{
        const result: number = Number(firstNum) / Number(secondNum);
        if (result < 0) {
            setOutputColor('red');
        } else {
            setOutputColor('#EEEEEE');
        }
        setOutput(result);
    }
    
    function power(): void {
        let first: number = Number(firstNum);
        let second: number = Number(secondNum);
        let result: number = 1;

        if (second < 0) {
            first = 1 / first;
            second *= -1;
        } 

        for (let i: number = 0; i < second; i++) {
            result *= first;
        }

        if (result < 0) {
            setOutputColor('red');
        } else {
            setOutputColor('#EEEEEE');
        }
        setOutput(result);
    }
    
    function reset(){
        setFirstNum("");
        setSecondNum("");
        setOutput(null);
        setOutputColor('#EEEEEE');
    }

    return (
        <StyledCalculatorContainer>
            <h4>JavaScript Calculator</h4>
            <StyledInputContainer>
                <input type="number" value={firstNum} onChange={(e)=>setFirstNum((e.target.value))}/>
                <input type="number" value={secondNum} onChange={(e)=>setSecondNum((e.target.value))}/>
            </StyledInputContainer>
            <StyledButtonsContainer>
                <button onClick={addition}> + </button>
                <button onClick={subtraction}> - </button>
                <button onClick={multiplication}> X </button>
                <button onClick={division}> / </button>
                <button onClick={power}> ^ </button>
            </StyledButtonsContainer>
            <StyledOutputContainer outputColor={outputColor}>
                <h3>{output}</h3>
            </StyledOutputContainer>
            <StyledClearButton onClick={reset}> CLEAR </StyledClearButton>
        </StyledCalculatorContainer>
    );
}