import React, { Component }  from 'react';
import { isMobile } from 'react-device-detect';
import Recommendations from './components/Recommendations';
import Equipment from './components/Equipment';
import Analytics from './components/Analytics';
import Cad from './components/Cad';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.renderContent = this.renderContent.bind(this);
	}


	renderContent() {
		if(isMobile) {
			return(
				<div className='Mobile'>
					<h1>Please use the browser.</h1>
				</div>
			);
		}
		return(
			<div className='content'>
				<Cad/>
				<Equipment/>
				<Analytics/>
				<Recommendations/>
			</div>
		);
	}
	render() {
		return(
			<div className='App'>
				<h2 className='main-title'>
					<b>EgyE 211 Engineering Library 1 Pre-Energy Audit</b>
				</h2>
				{ this.renderContent() }
			</div>
		);
	}
}
export default App;