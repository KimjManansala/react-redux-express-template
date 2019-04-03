import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import testReducer from './testReducer'

const rootReducer = combineReducers({
    testReducer
	// add all your reducers here 
});

export default rootReducer;