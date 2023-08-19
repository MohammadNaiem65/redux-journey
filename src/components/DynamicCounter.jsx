import { useDispatch, useSelector } from 'react-redux';
import {
	dynamicDecrement,
	dynamicIncrement,
} from '../redux/dynamicCounter/actionCreators';

export default function DynamicCounter() {
	const count = useSelector((state) => state.dynamicCounter.value);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(dynamicIncrement());
	};

	const decrementHandler = () => {
		dispatch(dynamicDecrement());
	};

	return (
		<div className='w-1/3 p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
			<div className='text-2xl font-semibold text-gray-500'>{count}</div>
			<div className='flex space-x-3'>
				<button
					className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
					onClick={incrementHandler}>
					Increment
				</button>
				<button
					className='bg-red-400 text-white px-3 py-2 rounded shadow'
					onClick={decrementHandler}>
					Decrement
				</button>
			</div>
		</div>
	);
}
