import * as types from '../Constants/ActionTypes';

export const listAll = () => {
    return { type: types.LIST_ALL }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}

export const updateStatus = (id) =>{
    return {
        type : types.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id) =>{
    return {
        type : types.DELETE,
        id
    }
}

export const updateTask = (task) =>{
    return {
        type : types.UPDATE_TASK,
        task
    }
}

export const toggleForm = () => {
    return { type: types.TOGGLE_FORM };
}

export const openForm = () => {
    return { type: types.OPEN_FORM };
}

export const closeForm = () => {
    return { type: types.CLOSE_FORM };
}

export const filterTable = (filterTable) =>{
    return {
        type :types.FILTER_TABLE,
        filterTable
    }
}

export const search = (keyword) =>{
    return {
        type : types.SEARCH,
        keyword
    }
}
