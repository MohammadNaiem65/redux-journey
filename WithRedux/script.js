// ! Required variables
const count = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// Action types
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// Action creators
function increment(value) {
	return {
		type: INCREMENT,
		value,
	};
}
function decrement(value) {
	return {
		type: DECREMENT,
		value,
	};
}

// initial state
const initialState = {
	value: 0,
};

// * Reducer function
function counterReducer(state = initialState, action) {
	if (action.type === INCREMENT) {
		return {
			...state,
			value: state.value + action.value,
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			value: state.value - action.value,
		};
	} else {
		return state;
	}
}

// Create store
const store = Redux.createStore(counterReducer);

// subscribe store
function handleReRender() {
	const state = store.getState();
	count.innerText = state.value;
}

store.subscribe(handleReRender);

// Add event listener
incrementBtn.addEventListener('click', () => {
	store.dispatch(increment(1));
});

decrementBtn.addEventListener('click', () => {
	store.dispatch(decrement(1));
});
