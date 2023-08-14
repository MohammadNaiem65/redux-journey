const Total = ({ total }) => {
	return (
		<div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
			<h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
				Total: {total}
			</h1>
		</div>
	);
};

export default Total;
