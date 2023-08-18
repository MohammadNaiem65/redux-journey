import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/Counter/ActionCreators';

export default function Counter() {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(increment());
	};

	const decrementHandler = () => {
		dispatch(decrement());
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
