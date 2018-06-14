import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';

var myReducer  = combineReducers({
    tasks : tasks,
    isDisplayForm
});

export default myReducer;