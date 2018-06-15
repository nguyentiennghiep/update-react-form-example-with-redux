import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';

var myReducer  = combineReducers({
    tasks : tasks,
    isDisplayForm,
    taskEditing
});

export default myReducer;