import * as types from '../Constants/ActionTypes';

var initialState = {
    name : '',
    status : '-1'
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
        {   
            return {
                name : action.filterTable.name,
                status : parseInt(action.filterTable.status,10)
            };
        }

    default: return [...state];
    }
}

export default myReducer;