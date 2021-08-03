import React from 'react'
import './App.css';
import Home from './components/Home'
import {NotesContextProvider} from './context/notesContext'


function App() {
  return (
    <NotesContextProvider>
      <Home />
    </NotesContextProvider>
    
  );
}



export default App;
