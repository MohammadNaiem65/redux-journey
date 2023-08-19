import { combineReducers } from 'redux';
import CounterReducer from './Counter/CounterReducer';
import dynamicCounterReducer from './dynamicCounter/dynamicCounterReducer';

export const rootReducer = combineReducers({
	counter: CounterReducer,
	dynamicCounter: dynamicCounterReducer,
});
