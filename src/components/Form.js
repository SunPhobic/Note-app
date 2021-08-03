import React,{useState} from 'react'
import {FormContainer,Input,TextArea,SubmitButton} from '../elements/FormElements'
import {useNoteContext} from '../context/noteState'

function Form() {
    const [title,setTitle] = useState('')
    const [note,setNote] = useState('')
    
    const {addNote} = useNoteContext()

    function handleSubmit(ev){
        ev.preventDefault()
        if(title !== '' && note !== ''){
            addNote(title,note)
            setTitle('')
            setNote('')
        }else{
            alert('you must complete all the fields')
        }
        
        
    }

    function handleChange(ev){
        if(ev.target.name === 'title'){
            setTitle(ev.target.value)
        }
        if(ev.target.name === 'note'){
            setNote(ev.target.value)
        }
    }


    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input 
                placeholder="Name of the Note"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <TextArea 
                placeholder="write your Note here..."
                name="note"
                value={note}
                onChange={handleChange}
            ></TextArea>
            <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
    )
}

export default Form
