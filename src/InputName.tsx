import React, {useCallback, useEffect, useState} from 'react';
import { useInput } from "./cutomHook";
import {IMemberInfo} from "./store/slice/memberSlice";
import {useSelector} from "./store/reduxHook";
import {cafeList, ICafeList, ICafeMenuInfo} from "./cafe_info";

interface IProps {
    info: IMemberInfo
}

const InputName = (props: IProps) => {
    const [name, changeName, setName] = useInput(props.info.name);
    const cafe = useSelector(state => state.cafe);
    const [cafeInfo, setCafeInfo] = useState<ICafeList>();
    const [category, setCategory] = useState('');
    const [menus, setMenus] = useState<ICafeMenuInfo[]>([]);
    const [menu, setMenu] = useState<ICafeMenuInfo>();

    useEffect(() => {
        setCafeInfo(cafeList.find(item => item.name === cafe.cafe))
    },[cafe.cafe]);

    useEffect(() => {
        if(cafeInfo && cafeInfo.name === cafe.cafe && category !== '') {
            setMenus(cafeInfo.cafe_menu.find(item => item.category === category)!.menus);
        }
    },[cafe, cafeInfo, category])

    const selectCategory = useCallback((e) => {
        e.preventDefault();
        setCategory(e.target.value)
    },[])

    const selectMenu = useCallback((e) => {

    },[]);

    const addRandomMenu = useCallback(() => {

    },[])

    return (
        <>
            <input
                value={name}
                onChange={changeName}
                placeholder='member name'
            />
            <select value={category} onChange={selectCategory}>
                <option value=''>select category</option>
                {cafeInfo?.cafe_menu.map((cate) => (
                    <option value={cate.category} key={cate.category}>{cate.category}</option>
                ))}
            </select>
            {
                category !== '' && menus.length > 0 && (
                    <>
                        <select value={menu?.name} onChange={selectMenu}>
                            <option value=''>select menu</option>
                            {menus.map((item) => (
                                <option value={item.name} key={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </>
                )
            }
            <button onClick={addRandomMenu}>random menu</button>
        </>
    )
}

export default InputName;
