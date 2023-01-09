import styled from 'styled-components'

export const ContainerHome = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .contentTodo{
        width: 50%;
        height: auto;
        max-height:80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: fit-content;
        background-color: rgba(255,255,255,.6);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        padding: 2rem;
        @media (max-width: 760px){
            width: 90%;
        }
    }
`;