import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';

export const useInput = (
    initialValue = '',
    number = Infinity
): [string, (e: React.FormEvent) => void, Dispatch<SetStateAction<string>>] => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback(e => {
        if (e.target.value.length <= number) {
            setValue(e.target.value);
        }
    }, []);
    return [value, handler, setValue];
};