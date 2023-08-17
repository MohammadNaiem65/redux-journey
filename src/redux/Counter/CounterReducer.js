import { DECREMENT, INCREMENT } from './ActionTypes';

const initialState = {
	value: 0,
};

function CounterReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				value: state.value + action.payload,
			};

		case DECREMENT:
			return {
				...state,
				value: state.value - action.payload,
			};
	}
}

export default CounterReducer;
