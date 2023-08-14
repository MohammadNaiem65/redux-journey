import { useState } from 'react';
import Counter from './Counter';
import Total from './Total';

const initialCounter = [
	{
		id: 1,
		count: 0,
	},
	{
		id: 2,
		count: 0,
	},
];

const WithoutRedux = () => {
	// ! Required variables
	const [counter, setCounter] = useState(initialCounter);
	const total = () => {
		return counter.reduce((total, curr) => total + curr.count, 0);
	};

	// * Increment count
	const incrementCount = (id) => {
		const newCounter = counter.map((c) => {
			if (c.id === id) {
				return {
					...c,
					count: ++c.count,
				};
			} else return c;
		});
		setCounter(newCounter);
	};

	// * Decrement count
	const decrementCount = (id) => {
		const newCounter = counter.map((c) => {
			if (c.id === id && c.count > 0) {
				return {
					...c,
					count: --c.count,
				};
			} else return c;
		});
		setCounter(newCounter);
	};

	return (
		<div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
			<h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
				Simple Counter Application
			</h1>

			<div className='max-w-md mx-auto mt-10 space-y-5'>
				<Total total={total()} />
				{counter.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						incrementCount={incrementCount}
						decrementCount={decrementCount}
					/>
				))}
			</div>
		</div>
	);
};

export default WithoutRedux;
