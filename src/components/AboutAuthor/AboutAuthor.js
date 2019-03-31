import React from 'react';
import ABOUTAUTHOR from '../../static/aboutauthor.jpg';
import './style.css';

const AboutAuthor = (props) => {
	return(
		<div className="AboutAuthor">
			<div className="author-heading">
				<p>About the Author</p>
			</div>

			<div className="content">
				<div className="author-img">
					<img src={ABOUTAUTHOR} alt="joseph"/>
				</div>
				<div className="author-dsc">
					<p>Joseph J. Bautista is a Master of Science in Energy Engineering student at the University of the Philippines-Diliman. With the advent of distributed networks, internet access, and AI, a revolution in energy is possible. He hopes to use his background in software engineering, data science, machine learning and deep learning, internet of things, and electronics to build smarter machines ranging from home automaton, energy monitoring, solar tracking, et al.</p>
				</div>
			</div>
		</div>
	);
}
export default AboutAuthor;