import { TypedUseSelectorHook, useSelector as reduxSelector, useDispatch as reduxDispatch } from "react-redux";
import { AppDispatch, RootState } from "./index";

export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;

export const useDispatch = () => reduxDispatch<AppDispatch>();
