import { DDECREMENT, DINCREMENT } from './actionIdentifiers';

const initialState = {
	value: 0,
};

export default function dynamicCounterReducer(state = initialState, action) {
	switch (action.type) {
		case DINCREMENT:
			return {
				...state,
				value: state.value + 5,
			};

		case DDECREMENT:
			return {
				...state,
				value: state.value - 5,
			};

		default:
			return state;
	}
}
