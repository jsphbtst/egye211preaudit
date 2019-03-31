import React, { Component }  from 'react';
import Recommendations from './components/Recommendations/Recommendations';
import Equipment from './components/Equipment/Equipment';
import Analytics from './components/Analytics/Analytics';
import Cad from './components/Cad/Cad';
import AuthorNote from './components/AuthorNote/AuthorNote';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';

import melchor from './static/melchor.png';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.renderContent = this.renderContent.bind(this);
	}


	renderContent() {
		return(
			<div className='content'>
				<Cad/>
				<Equipment/>
				<Analytics/>
				<Recommendations/>
				<AuthorNote/>
				<AboutAuthor/>
				<br/>
			</div>
		);
	}
	render() {
		return(
			<div className='App'>
				<div className='bg-image'>
					<img src={melchor} alt='melchor'/>
					<p className='heading'>Engg Lib I</p>
					<p className='body'>For Energy Engineering 211: Energy Conservation, each class member was tasked to perform a pre-audit on the UP Diliman College of Engineering Library I. Here I present the data I gathered and my energy conservation recommendations based on my pre-audit.</p>
				</div>
				<Cad/>
				<Equipment/>
				<Analytics/>
				<Recommendations/>
				<AuthorNote/>
				<AboutAuthor/>
			</div>
		);
	}
}
export default App;