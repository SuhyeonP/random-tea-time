import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cafeList} from "../../cafe_info";

export interface ICafeState {
    cafe: string;
}

const initialState: ICafeState = {
    cafe: '',
}

const cafeSlice = createSlice({
    name: 'cafeSlice',
    initialState,
    reducers: {
        settingCafe(state, action: PayloadAction<string>): void {
            state.cafe = action.payload;
        },
        chooseRandomCafe(state): void {
            state.cafe = cafeList.map((cafe) => cafe.name)[Math.floor(Math.random() * cafeList.length)];
        }
    }
})

export const { settingCafe, chooseRandomCafe } = cafeSlice.actions;

export default cafeSlice;