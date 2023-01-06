import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RoomState } from "../Redux";

export const useTypedSelector: TypedUseSelectorHook<RoomState> = useSelector;
