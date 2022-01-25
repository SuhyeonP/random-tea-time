import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "./store/reduxHook";
import InputName from "./InputName";

function App() {
    const dispatch = useDispatch();
    const member = useSelector(state => state.member);
    const [members, setMembers] = useState<string[]>(member.member.map((ele) => ele.name));

    const addMember = useCallback(() => {
        members.push('');
    },[])

    return (
        <div className="App">
            {members.map((memb) => (
                <InputName value={memb}/>
            ))}
            <button onClick={addMember}>+</button>
        </div>
    );
}

export default App;
