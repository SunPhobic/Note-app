import React, {useState,useContext} from 'react'

const NoteContext = React.createContext()
const useNoteContext = () => useContext(NoteContext)

function NoteContextProvider({children}){
    const [notes, setNotes] = useState([
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 2, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
        {title: 1, noteContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta velit aliquam consectetur inventore earum ex cumque.'},
    ])
    
    function addNote(title,note){
        
        setNotes([...notes,{title : title, noteContent : note}])
    }

    return(
        <NoteContext.Provider value={{notes,addNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export {NoteContextProvider,useNoteContext}