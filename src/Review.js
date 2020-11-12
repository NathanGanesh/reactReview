import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ count, prevButton, nextButton, randomButton }) => {
	const { image, name, job, text } = count;

	return (
		<div className="main-review">
			<div className="main-quote-box">
				<FaQuoteRight className="main-quote" />
			</div>
			<div className="main-image">
				<img src={image} alt={name} />
			</div>
			<h5 className="review-name">{name}</h5>
			<h5 className="review-job">{job}</h5>
			<h6 className="review-description">{text}</h6>
			<div className="chevron">
				<button className="prev-btn" onClick={prevButton}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextButton}>
					<FaChevronRight />
				</button>
			</div>
			<button className="suprise-me" onClick={randomButton}>
				Suprise Me
			</button>
		</div>
	);
};

export default Review;
