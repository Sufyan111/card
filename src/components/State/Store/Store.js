import {
    createStore,
    combineReducers
} from "redux";
import {
    groupReducer
} from "../Reducers/groupReducer";
import {
    empReducer
} from "../Reducers/EmpData";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            groupReducer,
            empReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}