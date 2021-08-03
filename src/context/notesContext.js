import React, {useState,useContext,useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'



const NoteContext = React.createContext();
const useNoteContext = () => useContext(NoteContext)

function NotesContextProvider({children}){

    const [notes,setNotes] = useState([]);
    
    useEffect(()=>{
        const cleanComponent = db.collection('notes')
            .onSnapshot((snapshot)=>{
                setNotes(snapshot.docs.map((snap)=>{
                    return snap.data()
                }))
            })
            

        return cleanComponent
    },[])


    return(
        <NoteContext.Provider value={notes}>
            {children}
        </NoteContext.Provider>
    )
}



export  {NotesContextProvider, useNoteContext}
