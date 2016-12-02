import { combineReducers } from 'redux';

import topbar from './topbar';
import todos from './todos';

const reducers = combineReducers({
	topbar: topbar,
	todos: todos
});

export default reducers;