import React from 'react'
import './App.css';
import Home from './components/Home'
import {NoteContextProvider} from './context/noteState'


function App() {
  return (
    <NoteContextProvider>
      <Home />
    </NoteContextProvider>
    
  );
}



export default App;
