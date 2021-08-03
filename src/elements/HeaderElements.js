import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    
`
const Title = styled.h1`
    margin: 1rem;
    font-size: 2rem;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 30%;
   
`
const HeaderButton = styled.button`
    height: 20%;
    width: 50%;
    font-size: 1.2rem;
    color: white;
    background-color: rgb(26, 27, 27);
    text-align: center;
    text-decoration: none;
`


export  {HeaderContainer,Title,ButtonContainer,HeaderButton}
