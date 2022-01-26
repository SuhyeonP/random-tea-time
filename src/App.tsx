import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "./store/reduxHook";
import {useInput} from "./cutomHook";
import {initialMemberCount} from "./store/slice/memberSlice";
import InputName from "./InputName";

function App() {
    const dispatch = useDispatch();
    const member = useSelector(state => state.member);
    const [step, setStep] = useState(0);
    const [memberCount, onChangeMemberCount] = useInput(0);

    const settingSlot = useCallback(() => {
        dispatch(initialMemberCount(Number(memberCount)))
    },[memberCount]);

    useEffect(() => {
        console.log(member.member)
    }, [member])

    return (
        <div className="App">
            {step === 0 && (
                <div>
                    <div>
                        <p>Select your team members</p>
                        <input type='number' value={memberCount} onChange={onChangeMemberCount}/>
                        <button onClick={settingSlot}>Go</button>
                    </div>
                    <div>
                        {member.member.length > 0 && (
                            member.member.map((mem, i) => (
                                <InputName info={mem} key={i}/>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
