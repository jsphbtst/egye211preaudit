import React, { Component }  from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		}
		this.renderContent = this.renderContent.bind(this);
		this.renderFurnitureDetails = this.renderFurnitureDetails.bind(this);
	}

	renderFurnitureDetails() {
		// Add a switch statement here
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
			<div>
				<div className='row'>
					<div className='col-sm-1'></div>
					
					<div className='col-sm-10'>
						<div className='embed-responsive embed-responsive-16by9'>
							<iframe className='embed-responsive-item'
								src='https://myhub.autodesk360.com/ue2d6a58a/shares/public/SH7f1edQT22b515c761eda9003f79da03956?mode=embed'
								allowFullScreen='false'
								webkitallowfullscreen='false' 
								mozallowfullscreen='false'
								frameBorder='0'
								title='autodesk'/>
						</div>
					</div>

					<div className='col-sm-1'></div>
				</div>

				<div className='row'>
					<div className='col-sm-1'></div>
					
					<div className='col-sm-4'>
						<div className='pull-left'>
							<h2>Select Equipment</h2>
						</div>
						{ /* 

						Clickables Here 
						- Other icons lose opacity when one is hovered on
						- onClick={() => this.renderFurnitureDetails(furnitureName)}
						- pick a default furniture that's clicked
	
						*/ }
					</div>

					<div className='col-sm-2'></div>

					<div className='col-sm-4'>
						<div className='pull-left'>
							<h2>Equipment Details</h2>
						</div>
						{ this.renderFurnitureDetails() }
					</div>

					<div className='col-sm-1'></div>
				</div>

				<div className='row'>
					<div className='col-sm-1'></div>
					
					<div className='col-sm-10'>
						<div className='pull-left'>
							<h2>Recommendations</h2>
						</div>
						{ /* Insert recommendations here */ }
					</div>

					<div className='col-sm-1'></div>
				</div>
			</div>
		);
	}
	render() {
		return(
			<div className='App'>
				<h2 className='title'>EgyE 211 Engineering Library 1 Pre-Energy Audit</h2>
				{ this.renderContent() }
			</div>
		);
	}
}
export default App;