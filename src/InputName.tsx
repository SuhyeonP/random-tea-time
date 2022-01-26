import React from 'react';
import { useInput } from "./cutomHook";
import {IMemberInfo} from "./store/slice/memberSlice";

interface IProps {
    info: IMemberInfo
}

const InputName = (props: IProps) => {
    const [name, changeName, setName] = useInput(props.info.name);

    return (
        <>
            <input
                value={name}
                onChange={changeName}
            />
        </>
    )
}

export default InputName;