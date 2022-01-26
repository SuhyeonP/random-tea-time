import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "./store/reduxHook";
import {useInput} from "./cutomHook";
import {initialMemberCount} from "./store/slice/memberSlice";
import InputName from "./InputName";
import {chooseRandomCafe} from "./store/slice/cafeSlice";

function App() {
    const dispatch = useDispatch();
    const member = useSelector(state => state.member);
    const cafe = useSelector(state => state.cafe);
    const [step, setStep] = useState(0);
    const [memberCount, onChangeMemberCount] = useInput(0);

    const settingSlot = useCallback(() => {
        if(memberCount > 0) {
            dispatch(initialMemberCount(Number(memberCount)));
            setStep(1);
        }
    }, [memberCount]);

    const getRandomCafe = useCallback(() => {
        dispatch(chooseRandomCafe())
        setStep(2)
    }, []);


    useEffect(() => {
        console.log(member.member)
    }, [member]);

    return (
        <div className="App">
            {step === 0 && (
                <div>
                    <p>Select your team members</p>
                    <input type='number' value={memberCount} onChange={onChangeMemberCount}/>
                    <button onClick={settingSlot}>Go</button>
                </div>
            )}
            {step === 1 && (
                <>
                    <div>
                        <button onClick={getRandomCafe}>start</button>
                    </div>
                </>
            )}
            {step === 2 && (
                <div>
                    <p>{cafe.cafe}</p>
                    {member.member.length > 0 && (
                        member.member.map((mem, i) => (
                            <div key={i}>
                                <InputName info={mem} />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
