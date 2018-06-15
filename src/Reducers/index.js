import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';


var myReducer  = combineReducers({
    tasks : tasks,
    isDisplayForm,
    taskEditing,
   filterTable
});

export default myReducer;