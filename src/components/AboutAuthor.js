import React from 'react';
import ABOUTAUTHOR from '../static/aboutauthor.jpg';
import Image from 'react-bootstrap/lib/Image';

const AboutAuthor = (props) => {
	return(
		<div className='row'>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
			<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 bump shadow'>
				<div className='pull-left'>
					<h2 className='title'><b>About the Author</b></h2>
				</div>
				<div className='row'>
					<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
						<Image src={ABOUTAUTHOR} thumbnail/>
						<br/>
					</div>
					<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
						<p>Joseph J. Bautista is a Master of Science in Energy Engineering student at the University of the Philippines-Diliman. With the advent of distributed networks, internet access, and AI, a revolution in energy is possible. He hopes to use his background in software engineering, data science, machine learning and deep learning, internet of things, and electronics to build smarter machines ranging from home automaton, energy monitoring, solar tracking, et al.
						</p>
					</div>
				</div>
				<br/>
			</div>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
		</div>
	);
}
export default AboutAuthor;