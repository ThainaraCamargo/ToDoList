import styled from "styled-components";

export const InputStyle = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    padding: 0 2.5rem 0 0;
    position: relative;
    input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border-radius: 6px;
    }

    button{
        cursor: pointer;
        right: 0;
        position: absolute;
        width: 50px;
        height: 100%;
        background-color: black;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;