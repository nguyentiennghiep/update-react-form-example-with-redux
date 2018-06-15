import * as types from '../Constants/ActionTypes';



var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + s4();
}

var findIndex = (id, tasks) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

var index = -1;

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            {
                if (action.task.id && ((index = findIndex(action.task.id, state)) !== -1)) {
                    state[index] = {
                        ...state[index],
                        name: action.task.name,
                        status: action.task.status
                    };
                }
                else {
                    var newTask = {
                        id: generateID(),
                        name: action.task.name,
                        status: (action.task.status === true ? true : false)
                    }
                    state.push(newTask);
                }

                localStorage.setItem('tasks', JSON.stringify(state));
                index = -1;
                return [...state];
            }
        case types.UPDATE_STATUS:
            {
                index = findIndex(action.id, state)
                if (index !== -1) {
                    state[index] = {
                        ...state[index],
                        status: !state[index].status
                    };
                }
                localStorage.setItem('tasks', JSON.stringify(state));
                index = -1;
                return [...state];
            }
        case types.DELETE:
            {
                index = findIndex(action.id, state);
                if (index !== -1) {
                    state.splice(index, 1);
                }
                localStorage.setItem('tasks', JSON.stringify(state));
                index = -1;
                return [...state];
            }
        default: return [...state];
    }
}

export default myReducer;