import { starbucks_menu } from "./starbucks";
import {gongcha_menu} from "./gongcha";

export interface ICafeMenuInfo {
    name: string;
    price: number;
    explain: string;
}

export interface ICafeMenu {
    category: string;
    menus: ICafeMenuInfo[]
}

export interface ICafeList {
    name: string;
    cafe_menu: ICafeMenu[];
}

export const cafeList: ICafeList[] = [starbucks_menu, gongcha_menu]