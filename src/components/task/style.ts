import styled, {css} from "styled-components";

interface TaskCardProps {
    complete: boolean
}

export const TaskCardStyle = styled.div<TaskCardProps>`
    width: 100%;
    border-bottom: 1px solid;
    ${({complete}) => 
        complete ? 
            css`
                 border-bottom-color: green;
            `
            :
            css`
                 border-bottom-color: black;
            `
    }

    transition: all .5s;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .initial {
        display: flex;
        align-items: center;
        gap: .5rem;
        transition: all .4s;
        ${({complete}) => 
        complete ? 
            css`
                color: rgba(0,0,0,.3);
                text-decoration: line-through;
                text-decoration-color: black;
            `
            :
            css`
                color: black;
                text-decoration: none;
            `
    }
    } 
    .buttons{
        display: flex;
        align-items: center;
        gap: .5rem
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .label__checkbox {
        display: none;
    }

    .label__check {
    display: inline-block;
    border-radius: 50%;
    border: 5px solid rgba(0,0,0,0.1);
    background: white;
    vertical-align: middle;
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border .3s ease;
    
    i.icon {
        opacity: 0.2;
        font-size: 8px;
        color: transparent;
        transition: opacity .3s .1s ease;
        -webkit-text-stroke: 3px rgba(0,0,0,.5);
    }
    
    &:hover {
        border: 5px solid rgba(0,0,0,0.2);
    }
    }

    .label__checkbox:checked + .label__text .label__check {
        animation: check .5s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;

  .icon {
    opacity: 1;
    color: white;
    -webkit-text-stroke: 0;
    animation: icon .3s cubic-bezier(1.000, 0.008, 0.565, 1.650) .1s 1 forwards;
  }
}

@keyframes icon {
  from {
    opacity: 0;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
}

@keyframes check {
  0% {
  }
  10% {
    opacity: 0.1;
    background: rgba(0,0,0,0.2);
  }
  12% {
    opacity: 0.4;
    background: rgba(0,0,0,0.1);
    border-width: 0;
  }
  50% {
    background: #00d478;
    border: 0;
    opacity: 0.6;
  }
  100% {
    background: #00d478;
    border: 0;
    opacity: 1;
  }
}
`;