import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    padding: 10px 18px;
    gap: 10px;
    min-width: 220px;
    background: black;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }
`

export const OutlineButton = styled(Button)`

        color: black;
        background-color: white;
        border: 1px solid black;

        &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
 
    }
`