import React,{useState} from 'react'
import {FormContainer,Input,TextArea,SubmitButton} from '../elements/FormElements'
import addNote from '../firebase/addNote'


function Form() {
    const [title,setTitle] = useState('')
    const [note,setNote] = useState('')
    
    

    function handleSubmit(ev){
        ev.preventDefault()
        if(title !== '' && note !== ''){
            addNote(title,note)
            .then(()=>console.log('elemento agregado'))
            .catch(err=>console.error(err))
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
