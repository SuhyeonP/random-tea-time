import memberSlice from "./slice/memberSlice";
import {configureStore} from "@reduxjs/toolkit";
import cafeSlice from "./slice/cafeSlice";

const store = configureStore({
    reducer: {
        member: memberSlice.reducer,
        cafe: cafeSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;