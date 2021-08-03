import styled from "styled-components";

const NoteContainer = styled.div`
    width: 90%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`
const NoteTitle = styled.h3`
    font-size: 1.2rem;
    text-align: center;
    background-color: white;
    margin-top:0.5rem;
`
const NoteBody = styled.p`
    width: 95%;
    margin-bottom: 0.5rem;
`
const NotesContainer = styled.div`
    min-height: 85%;
    max-height: 85%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    z-index: 999;
`
export {NoteContainer, NoteTitle, NoteBody,NotesContainer}