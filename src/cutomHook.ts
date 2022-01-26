import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';

export const useInput = (
    initialValue: string | number = '',
    number = Infinity
): [string | number, (e: React.FormEvent) => void, Dispatch<SetStateAction<string | number>>] => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback(e => {
        if (e.target.value.length <= number) {
            setValue(e.target.value);
        }
    }, []);
    return [value, handler, setValue];
};