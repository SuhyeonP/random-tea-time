import React from 'react';
import { useInput } from "./cutomHook";

interface IProps {
    value: string;
}

const InputName = (props: IProps) => {
    const [name, changeName, setName] = useInput(props.value);

    return (
        <div>
           <input
               value={name}
               onChange={changeName}
           />
        </div>
    )
}

export default InputName;