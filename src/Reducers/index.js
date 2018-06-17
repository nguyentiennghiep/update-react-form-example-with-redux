import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import search from './search'
import sortTask from './sortTask'

var myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm,
    taskEditing,
    filterTable : filterTable,
    search,
    sortTask
});

export default myReducer;