import { createStore, combineReducers } from 'redux';

const SEARCH_REQUEST = 'SEARCH/SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH/SEARCH_SUCCESS';
const SEARCH_FAILED = 'SEARCH/SEARCH_FAILED';
const SET_TITLE = 'TITLE/SET_TITLE';

export const setTitle = (title) => {
    return {
        type: SET_TITLE,
        payload: {
            title
        }
    };
};

export const request = (value) => {
    return {
        type: SEARCH_REQUEST,
        payload: {
            value
        }
    };
};

export const success = data => {
    return {
        type: SEARCH_SUCCESS,
        payload: {
            data
        }
    };
};

export const failed = () => {
    return {
        type: SEARCH_FAILED,
    };
};

const intialStateSearch = {
    data: [],
    isLoading: true,
    value: ''
};

const initialStateTitle = {
    title: ''
};

const reducerTitle = (state = initialStateTitle, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload.title
            }
        default:
            return state;
    }
};

const reducerSearch = (state = intialStateSearch, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                value: action.payload.value
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: true,
            }
        case SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                value: ''
            }

        default:
            return state;
    };
};

const rootReducer = combineReducers({
    reducerSearch,
    reducerTitle
});

export const store = createStore(rootReducer, []
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    console.log(store.getState())