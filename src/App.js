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
			styleAC: {},
			styleBag: {},
			styleBookshelves: {},
			styleFans: {},
			styleLights: {},
			styleComputers: {},
			styleRoundTables: {},
			styleStudyArea: {},
			furnitureList: ['A/C', 'Bag Counters', 'Bookshelves', 'Fans', 'Lights', 'Computers'],
			content: ''
		}
		this.renderContent = this.renderContent.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.setContent = this.setContent.bind(this);
	}

	setContent(content) {
		this.setState({ content });
	}

	mouseLeave(type) {
		if (type === 'ac') {
			this.setState({
				styleBag: {}, styleBookshelves: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		} 
		if (type === 'bags') {
			this.setState({
				styleAC: {}, styleBookshelves: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		} 

		if (type === 'bookshelves') {
			this.setState({
				styleAC: {}, styleBag: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		}

		if (type === 'fans') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		}

		if (type === 'lights') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		}

		if (type === 'computers') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleRoundTables: {}, styleStudyArea: {}
			});
		}

		if (type === 'tables') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleComputers: {}, styleStudyArea: {}
			});
		}

		if (type === 'area') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleComputers: {}, styleRoundTables: {}
			});
		}
	}

	mouseEnter(type) {
		let style = {
			opacity: '0.5'
		};
		if (type === 'ac') {
			this.setState({
				styleBag: style, styleBookshelves: style, styleFans: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style
			});
		} 
		// styleAC, styleBag, styleBookshelves, styleFans, styleLights
		// styleComputers, styleRoundTables, styleStudyArea
		if (type === 'bags') {
			this.setState({
				styleAC: style, styleBookshelves: style, styleFans: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style
			});
		} 

		if (type === 'bookshelves') {
			this.setState({
				styleAC: style, styleBag: style, styleFans: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style
			});
		}

		if (type === 'fans') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style
			});
		}

		if (type === 'lights') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style
			});
		}

		if (type === 'computers') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleRoundTables: style, styleStudyArea: style
			});
		}

		if (type === 'tables') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleComputers: style, styleStudyArea: style
			});
		}

		if (type === 'area') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleComputers: style, styleRoundTables: style
			});
		}
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

				<div className='equipment'>
				<div className='row'>
					<div className='col-sm-1'></div>
					
					<div className='col-sm-4'>
						{/**
						<div className="page-header">
							<div className='pull-left'>
								<h2 className='title'>Select Equipment</h2>
							</div>
						</div>
						**/}

						<div className='z-depth-5'>
							<Card>
								<Card.Body>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** AC **/ }
												<div className='row ac'
													onClick={() => this.setContent('AC Units')}
													onMouseLeave={() => this.mouseLeave('ac')}
													onMouseEnter={() => this.mouseEnter('ac')}
													style={this.state.styleAC}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
													</div>
													<div className='col-9'>
														<h4>AC Units</h4>
													</div>
												 </div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Bags **/ }
												<div className='row bag'
													onClick={() => this.setContent('Bag Counters')}
													onMouseLeave={() => this.mouseLeave('bags')}
													onMouseEnter={() => this.mouseEnter('bags')}
													style={this.state.styleBag}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg>
													</div>
													<div className='col-9'>
														<h4>Bag Counters</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Bookshelves **/ }
												<div className='row bookshelves'
													onClick={() => this.setContent('Bookshelves')}
													onMouseLeave={() => this.mouseLeave('bookshelves')}
													onMouseEnter={() => this.mouseEnter('bookshelves')}
													style={this.state.styleBookshelves}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
													</div>
													<div className='col-9'>
														<h4>Bookshelves</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Fans **/ }
												<div className='row fans'
													onClick={() => this.setContent('Fans')}
													onMouseLeave={() => this.mouseLeave('fans')}
													onMouseEnter={() => this.mouseEnter('fans')}
													style={this.state.styleFans}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
													</div>
													<div className='col-9'>
														<h4>Fans</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Lights **/ }
												<div className='row lights'
													onClick={() => this.setContent('Lights')}
													onMouseLeave={() => this.mouseLeave('lights')}
													onMouseEnter={() => this.mouseEnter('lights')}
													style={this.state.styleLights}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z" clipPath="url(#b)"/></svg>
													</div>
													<div className='col-9'>
														<h4>Lights</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Computers **/ }
												<div className='row computers'
													onClick={() => this.setContent('Computers')}
													onMouseLeave={() => this.mouseLeave('computers')}
													onMouseEnter={() => this.mouseEnter('computers')}
													style={this.state.styleComputers}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
													</div>
													<div className='col-9'>
														<h4>Computers</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Round Tables **/ }
												<div className='row tables'
													onClick={() => this.setContent('Round Tables')}
													onMouseLeave={() => this.mouseLeave('tables')}
													onMouseEnter={() => this.mouseEnter('tables')}
													style={this.state.styleRoundTables}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
													</div>
													<div className='col-9'>
														<h4>Round Tables</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
									<div className='row'>
										<div className='col-8'>
											<Card.Title className='text-left'>
												{ /** Study Area **/ }
												<div className='row study-area'
													onClick={() => this.setContent('Study Area')}
													onMouseLeave={() => this.mouseLeave('area')}
													onMouseEnter={() => this.mouseEnter('area')}
													style={this.state.styleStudyArea}
												>
													<div className='col-3'>
														<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M42 6H6c-2.2 0-4 1.8-4 4v6h4v-6h36v28H28v4h14c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM2 36v6h6c0-3.32-2.68-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.74-6.26-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.16-9.86-22-22-22zm20 2.18v4L29 30l7-3.82v-4L29 26l-7-3.82zM29 12l-11 6 11 6 11-6-11-6z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
													</div>
													<div className='col-9'>
														<h4>Study Area</h4>
													</div>
												</div>
											</Card.Title>
										</div>
										<div className='col-4'></div>
									</div>
								</Card.Body>
							</Card>
						</div>

					</div>

					<div className='col-sm-6'>
						{/**
						<div className='page-header'>
							<div className='pull-left'>
								<h2 className='title'>Equipment Details</h2>
							</div>
						</div>
						**/}
						<Card>
							<Card.Body>
								<div className='row'>
									<div className='col-6'>
										<Card.Title className='text-left'>
											{ this.state.content }
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