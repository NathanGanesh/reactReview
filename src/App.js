import React from 'react';
import Review from './Review';
function App() {
	const [ count, setCount ] = React.useState(0);

	return (
		<div>
			<h2>Our Reviews</h2>
			<div className="underline" />
			<Review count={count} />
		</div>
	);
}

export default App;
