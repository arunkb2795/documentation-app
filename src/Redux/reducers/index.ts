import { combineReducers } from "redux";
import repositoriesReducers from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducers,
});

export type RoomState = ReturnType<typeof reducers>;

export default reducers;
