import React, { Component }  from 'react';
import { isMobile } from 'react-device-detect';

import Card from 'react-bootstrap/lib/Card';

import Recommendations from './components/Recommendations';
import Cad from './components/Cad';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			furnitureList: ['A/C', 'Bag Counters', 'Bookshelves', 'Fans', 'Lights', 'Computers']
		}
		this.renderContent = this.renderContent.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
		this.mouseOver = this.mouseOver.bind(this);
	}

	mouseOut() {
		// console.log('mouse out');
	}

	mouseOver() {
		// console.log('mouse over');
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

				<div className='row'>
					<div className='col-sm-1'></div>
					
					<div className='col-sm-4'>
						<div className="page-header">
							<div className='pull-left'>
								<h2 className='title'>Select Equipment</h2>
							</div>
						</div>
						{ /* 

						Clickables Here 
						- Other icons lose opacity when one is hovered on
						- onClick={() => this.renderFurnitureDetails(furnitureName)}
						- pick a default furniture that's clicked
	
						*/ }
						<div className='z-depth-5'>
							<Card>
								<Card.Body>
									<div className='row' 
										onClick={() => console.log('AAAHH')}
										onMouseOut={() => this.mouseOut()}
										onMouseOver={() => this.mouseOver()}
									>
										<div className='col-8'>
											<Card.Title className='text-left'>
												A/C
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Bag Counters
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Bookshelves
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Fans
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Lights
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Computers
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Round Tables
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												Study Area
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
								</Card.Body>


								{/*<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>*/}
							</Card>
						</div>

					</div>

					<div className='col-sm-6'>
						<div className='page-header'>
							<div className='pull-left'>
								<h2 className='title'>Equipment Details</h2>
							</div>
						</div>
						<Card>
							<Card.Body>
								<div className='row'>
									<div className='col-6'>
										<Card.Title className='text-left'>
											asdfghj
										</Card.Title>
									</div>
									<div className='col-6'></div>
								</div>

								{/*<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>*/}
							</Card.Body>
						</Card>
					</div>

					<div className='col-sm-1'></div>
				</div>

				<Recommendations/>
			</div>
		);
	}
	render() {
		return(
			<div className='App'>
				<h2 className='main-title'><b>EgyE 211 Engineering Library 1 Pre-Energy Audit</b></h2>
				{ this.renderContent() }
			</div>
		);
	}
}
export default App;