import {combineReducers} from 'redux';
import tasks from './tasks';

var myReducer  = combineReducers({
    tasks : tasks
});

export default myReducer;