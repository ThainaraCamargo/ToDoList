import styled from "styled-components";

export const ContainerTasks = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 100%;
    overflow: auto;
    padding: 0 .5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: .5rem;

   
    &::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
    background-color: #515151;    /* color of the scroll thumb */
    border-radius: 6px;       /* roundness of the scroll thumb */
    border: 2px solid black;  /* creates padding around scroll thumb */
    }
`;