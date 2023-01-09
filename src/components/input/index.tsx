import { InputStyle } from "./style"
import {AddToListIcon} from '../../styles/components/icons'

const InputTasks = () => {
    return (
        <InputStyle>
            <input type='text' id="inputText" name="inputText"required ></input>
            <button type="submit" >
                <AddToListIcon />
            </button>
        </InputStyle>
    )
}

export default InputTasks 