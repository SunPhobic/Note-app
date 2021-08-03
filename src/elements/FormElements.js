import styled from "styled-components";

const FormContainer = styled.form`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: lightgray;
`
const Input = styled.input`
    height: 10%;
    width : 90%;
    text-align: center;
    font-size:4vh;
`
const TextArea = styled.textarea`
    height: 50%;
    width : 90%;
`
const SubmitButton = styled.button`
    height: 2rem;
    width: 30%;
    color: white;
    background-color: rgb(26, 27, 27);
`

export{FormContainer,Input,TextArea,SubmitButton}