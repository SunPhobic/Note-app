import { db } from "./firebaseConfig";

export default function addNote(title,noteContent){
    return db.collection('notes').add({
        title : title , 
        noteContent : noteContent
    })
}

