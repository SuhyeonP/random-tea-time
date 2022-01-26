import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {cafeList, ICafeList, ICafeMenu, ICafeMenuInfo} from "../../cafe_info";

export interface IMemberInfo {
    name: string;
    menu: ICafeMenuInfo;
}

interface IMemberState {
    member: IMemberInfo[];
}

const initialState: IMemberState = {
    member: [],
}

const memberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    reducers: {
        settingMembers(state, action: PayloadAction<IMemberInfo[]>): void {
            state.member = action.payload;
        },
        chooseMemberMenu(state, action: PayloadAction<IMemberInfo[]>): void {
            const names = action.payload.map((ele) => ele.name);
            names.forEach((name, index) => {
                state.member[state.member.findIndex(item => item.name === name)] = action.payload[index];
            })
        },
        chooseRandomMenu(state, action: PayloadAction<string>): void {
            const cafeMenu = cafeList.find(item => item.name === action.payload)!.cafe_menu;
            const cafeCategories = cafeMenu.map((ele) => ele.category);
            const randomCategory = cafeCategories[Math.floor(Math.random() * cafeCategories.length)];
            const randomMenus = cafeMenu.find(menu => menu.category === randomCategory)!.menus;
            state.member.forEach((mem) => {
                if (mem.menu.name === '') {
                    mem.menu = randomMenus[Math.floor(Math.random() * randomMenus.length)]
                }
            });
        },
        initialMember(state, action: PayloadAction<string[]>): void {
            const temp = Array.from({length: action.payload.length}, (v, i) => {
                return {
                    name: action.payload[i],
                    menu: {
                        name:'',
                        price:0,
                        explain:''
                    }
                }
            });
            state.member = temp;

        },
        initialMemberCount(state, action: PayloadAction<number>): void {
            const temp = Array.from({length: action.payload}, (v, i) => {
                return {
                    name: '',
                    menu: {
                        name: '',
                        price: 0,
                        explain: ''
                    }
                }
            })
            state.member = temp;
        }
    }

});

export const { initialMemberCount, settingMembers, chooseMemberMenu, chooseRandomMenu, initialMember } = memberSlice.actions;

export default memberSlice;
