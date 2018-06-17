import * as types from '../Constants/ActionTypes';

var initialState = {
    name : '',
    value : 1
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASK:

            {
                console.log(action.name);
                return action.sortTask;
            }

        default: return {...state} ;
    }
}

export default myReducer;