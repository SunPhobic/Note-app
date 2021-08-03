import React from 'react'
import {NoteContainer, NoteTitle, NoteBody,NotesContainer} from '../elements/noteListElements'
import {useNoteContext} from '../context/noteState'

function NoteList() {

    const {notes} = useNoteContext()

    return (
        
        <NotesContainer>
        {
            notes.map((note,index)=>{
                return(
                        
                    <NoteContainer key={index}>
                        <NoteTitle>{note.title}</NoteTitle>
                        <NoteBody>{note.noteContent}</NoteBody>
                    </NoteContainer> 
                        
                    
                )
            })

        }
        </NotesContainer>
    )    
}

export default NoteList
