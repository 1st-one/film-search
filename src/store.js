import { createStore } from 'redux';
const SEARCH_REQUEST = 'SEARCH/SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH/SEARCH_SUCCESS';
const SEARCH_FAILED = 'SEARCH/SEARCH_FAILED';

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

const intialState = {
    data: [],
    isLoading: true,
    value: ''
};

const reducer = (state = intialState, action) => {
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

export const store = createStore(reducer, []
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());