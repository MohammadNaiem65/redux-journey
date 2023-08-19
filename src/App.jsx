import Counter from './components/Counter';
import DynamicCounter from './components/DynamicCounter';

function App() {
	return (
		<div className='w-screen h-screen p-10 bg-gray-100 text-slate-700 flex flex-col justify-center items-center gap-y-5'>
			<Counter />
			<DynamicCounter />
		</div>
	);
}

export default App;
