import { DDECREMENT, DINCREMENT } from './actionIdentifiers';

export function dynamicIncrement() {
	return {
		type: DINCREMENT,
	};
}

export function dynamicDecrement() {
	return {
		type: DDECREMENT,
	};
}
