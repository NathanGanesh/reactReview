import React from 'react';
import Review from './Review';
import people from './data';

function App() {
	const [ count, setCount ] = React.useState(0);

	const prevButton = () => {
		if (count == 0) {
			setCount(people.length - 1);
		} else {
			setCount(count - 1);
		}
	};

	const handlePositiveChange = () => {
		if (count == people.length - 1) {
			setCount(0);
		} else {
			setCount(count + 1);
		}
	};

	const supriseMe = () => {
		const peoplelength = people.length;
		const randomNumber = Math.floor(Math.random() * peoplelength);
		// console.log();
		setCount(randomNumber);
	};

	return (
		<div>
			<h2>Our Reviews</h2>
			<div className="underline" />
			<Review
				count={people[count]}
				prevButton={prevButton}
				nextButton={handlePositiveChange}
				randomButton={supriseMe}
			/>
		</div>
	);
}

export default App;
