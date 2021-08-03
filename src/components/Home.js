import React, {useState} from 'react'
import styled from 'styled-components'
import {HeaderContainer,Title,ButtonContainer,HeaderButton} from '../elements/HeaderElements'
import Form from './Form'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NoteList from './NoteList'

function Home() {

    const [inHome, setInHome] = useState(true)

    return (
        <MainContainer scroll={inHome}>
            <HeaderContainer>
                <Title>Note-app</Title>
                <ButtonContainer>
                    {
                        inHome ?<HeaderButton as={Link} to="/notes" onClick={()=>setInHome(!inHome)}>Notes</HeaderButton>
                                :<HeaderButton as={Link} to="/" onClick={()=>setInHome(!inHome)} >Add Note</HeaderButton>
                    }
                    
                </ButtonContainer>
            </HeaderContainer>
            <Switch>
                <Route path="/" component={Form} exact={true}/>
                <Route path="/notes" component={NoteList}/>
            </Switch>
            
        </MainContainer>
    )
}

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    width: 50vw;
    background-color: lightgray;
    margin-top: 5%;
    @media (max-width: 522px){
        width: 100vw;
    }
    @media (max-height: 600px){
        height: 100vh;
        margin-top: 0;
    }
`

export default Home
