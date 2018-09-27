import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';
import Image from 'react-bootstrap/lib/Image';
import AC1 from '../static/ac/AC1.jpg';
import AC2 from '../static/ac/AC2.jpg';
import AC3 from '../static/ac/AC3.jpg';
import AC4 from '../static/ac/AC4.jpg';
import AC5 from '../static/ac/AC5.jpg';
import AC6 from '../static/ac/AC6.jpg';
import AC7 from '../static/ac/AC7.jpg';
import AC8 from '../static/ac/AC8.jpg';
import AC9 from '../static/ac/AC9.jpg';
import AC10 from '../static/ac/AC10.jpg';
import AC11 from '../static/ac/AC11.jpg';
import AC12 from '../static/ac/AC12.jpg';
import EP1  from '../static/breaker/EP1.jpg';
import EP2  from '../static/breaker/EP2.jpg';
import EP3  from '../static/breaker/EP3.jpg';
import EP4  from '../static/breaker/EP4.jpg';
import EP5  from '../static/breaker/EP5.jpg';
import BAG1 from '../static/bag counter/BAG1.jpg';
import BAG2 from '../static/bag counter/BAG2.jpg';
import BAG3 from '../static/bag counter/BAG3.jpg';
import BAG4 from '../static/bag counter/BAG4.jpg';
import BAG1FP from '../static/bag counter/BAG1FP.jpg';
import BAG2FP from '../static/bag counter/BAG2FP.jpg';
import BAG3FP from '../static/bag counter/BAG3FP.jpg';
import BAG4FP from '../static/bag counter/BAG4FP.jpg';
import BOOKSHELF1 from '../static/bookshelf/BOOKSHELF1.jpg';
import BOOKSHELF2 from '../static/bookshelf/BOOKSHELF2.jpg';
import BOOKSHELF3 from '../static/bookshelf/BOOKSHELF3.jpg';
import BOOKSHELF4 from '../static/bookshelf/BOOKSHELF4.jpg';
import BOOKSHELF5 from '../static/bookshelf/BOOKSHELF5.jpg';
import BOOKSHELF6 from '../static/bookshelf/BOOKSHELF6.jpg';
import BOOKSHELF7 from '../static/bookshelf/BOOKSHELF7.jpg';
import BOOKSHELF8 from '../static/bookshelf/BOOKSHELF8.jpg';
import PC1 from '../static/computer/PC1.jpg';
import PC2 from '../static/computer/PC2.jpg';
import PC3 from '../static/computer/PC3.jpg';
import PC4 from '../static/computer/PC4.jpg';
import PC5 from '../static/computer/PC5.jpg';
import PC6 from '../static/computer/PC6.jpg';
import TABLE1 from '../static/round tables/TABLE1.jpg';
import TABLE1FP from '../static/round tables/TABLE1FP.jpg';
import { AC_DESCRIPTION, BAG_DESCRIPTION,
		BOOKSHELF_DESCRIPTION, PC_DESCRIPTION,
		TABLE_DESCRIPTION, EP_DESCRIPTION } from '../helpers/constants';

class Equipment extends Component {
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
			breakerBoxes: {},
			content: <p>Push an icon from the left to start!</p>
		};
		this.setContent = this.setContent.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
	}

	setContent(content) {
		let items = [];
		if (content === 'ac') {
			items.push(
				<div>
					<h3><b>A/C Units</b></h3>
					<p>{AC_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC1} onClick={() => window.open(AC1)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC2} onClick={() => window.open(AC2)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC3} onClick={() => window.open(AC3)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC4} onClick={() => window.open(AC4)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC5} onClick={() => window.open(AC5)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC6} onClick={() => window.open(AC6)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC7} onClick={() => window.open(AC7)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC8} onClick={() => window.open(AC8)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC9} onClick={() => window.open(AC9)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC10} onClick={() => window.open(AC10)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC11} onClick={() => window.open(AC11)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={AC12} onClick={() => window.open(AC12)} thumbnail/>
						</div>
					</div>
				</div>
			);
		}
		
		if (content === 'breaker') {
			items.push(
				<div>
					<h3><b>Breaker Boxes</b></h3>
					<p>{EP_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={EP1} onClick={() => window.open(EP1)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={EP2} onClick={() => window.open(EP2)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={EP3} onClick={() => window.open(EP3)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={EP4} onClick={() => window.open(EP4)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={EP5} onClick={() => window.open(EP5)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
						</div>
					</div>
				</div>
			);
		}

		if (content === 'bags') {
			items.push(
				<div>
					<h3><b>Bag Counters</b></h3>
					<p>{BAG_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG1} onClick={() => window.open(BAG1)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG2} onClick={() => window.open(BAG2)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG3} onClick={() => window.open(BAG3)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG4} onClick={() => window.open(BAG4)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG1FP} onClick={() => window.open(BAG1FP)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG2FP} onClick={() => window.open(BAG2FP)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG3FP} onClick={() => window.open(BAG3FP)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BAG4FP} onClick={() => window.open(BAG4FP)} thumbnail/>
						</div>
					</div>
				</div>
			);
		}

		if (content === 'computers') {
			items.push(
				<div>
					<h3><b>Computers</b></h3>
					<p>{PC_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC1} onClick={() => window.open(PC1)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC2} onClick={() => window.open(PC2)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC3} onClick={() => window.open(PC3)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC4} onClick={() => window.open(PC4)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC5} onClick={() => window.open(PC5)} thumbnail/>
						</div>
						<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
							<Image src={PC6} onClick={() => window.open(PC6)} thumbnail/>
						</div>
					</div>
				</div>
			);

		}

		if (content === 'bookshelves') {
			items.push(
				<div>
					<h3><b>Bookshelves</b></h3>
					<p>{BOOKSHELF_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF1} onClick={() => window.open(BOOKSHELF1)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF2} onClick={() => window.open(BOOKSHELF2)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF3} onClick={() => window.open(BOOKSHELF3)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF4} onClick={() => window.open(BOOKSHELF4)} thumbnail/>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF5} onClick={() => window.open(BOOKSHELF5)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF6} onClick={() => window.open(BOOKSHELF6)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF7} onClick={() => window.open(BOOKSHELF7)} thumbnail/>
						</div>
						<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
							<Image src={BOOKSHELF8} onClick={() => window.open(BOOKSHELF8)} thumbnail/>
						</div>
					</div>
				</div>
			);
		}

		if (content === 'tables') {
			items.push(
				<div>
					<h3><b>Round Tables</b></h3>
					<p>{TABLE_DESCRIPTION}</p>
					<div className='row'>
						<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
							<Image src={TABLE1} onClick={() => window.open(TABLE1)} thumbnail/>
						</div>
						<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
							<Image src={TABLE1FP} onClick={() => window.open(TABLE1FP)} thumbnail/>
						</div>
					</div>
				</div>
			);
		}

		this.setState({ content: items });
	}

	mouseLeave(type) {
		if (type === 'ac') {
			this.setState({
				styleBag: {}, styleBookshelves: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		} 
		if (type === 'bags') {
			this.setState({
				styleAC: {}, styleBookshelves: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		} 

		if (type === 'bookshelves') {
			this.setState({
				styleAC: {}, styleBag: {}, styleFans: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		}

		if (type === 'fans') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleLights: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		}

		if (type === 'lights') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		}

		if (type === 'computers') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleRoundTables: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		}

		if (type === 'tables') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleComputers: {}, styleStudyArea: {}, breakerBoxes: {}
			});
		}

		if (type === 'area') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleComputers: {}, styleRoundTables: {}, breakerBoxes: {}
			});
		}

		if (type === 'breaker') {
			this.setState({
				styleAC: {}, styleBag: {}, styleBookshelves: {}, styleFans: {},
				styleLights: {}, styleComputers: {}, styleRoundTables: {}, styleStudyArea: {}
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
				styleComputers: style, styleRoundTables: style, styleStudyArea: style, 
				breakerBoxes: style
			});
		} 

		if (type === 'bags') {
			this.setState({
				styleAC: style, styleBookshelves: style, styleFans: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style, 
				breakerBoxes: style
			});
		} 

		if (type === 'bookshelves') {
			this.setState({
				styleAC: style, styleBag: style, styleFans: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style, 
				breakerBoxes: style
			});
		}

		if (type === 'fans') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleLights: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style,
				breakerBoxes: style
			});
		}

		if (type === 'lights') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleComputers: style, styleRoundTables: style, styleStudyArea: style,
				breakerBoxes: style
			});
		}

		if (type === 'computers') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleRoundTables: style, styleStudyArea: style,
				breakerBoxes: style
			});
		}

		if (type === 'tables') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleComputers: style, styleStudyArea: style,
				breakerBoxes: style
			});
		}

		if (type === 'area') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleComputers: style, styleRoundTables: style,
				breakerBoxes: style
			});
		}

		if (type === 'breaker') {
			this.setState({
				styleAC: style, styleBag: style, styleBookshelves: style, styleFans: style,
				styleLights: style, styleComputers: style, styleRoundTables: style,
				styleStudyArea: style
			});
		}
	}	

	render() {
		return(
			<div className='equipment'>
			<div className='row is-table-row'>
				<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
				<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
					<Card className='bump shadow'>
						<Card.Body>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
									<Card.Title className='text-left'>
										{ /** AC **/ }
										<div className='row ac'
											onClick={() => this.setContent('ac')}
											onMouseLeave={() => this.mouseLeave('ac')}
											onMouseEnter={() => this.mouseEnter('ac')}
											style={this.state.styleAC}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>AC Units</h4>
											</div>
										 </div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-sm-8'>
									<Card.Title className='text-left'>
										{ /** Bags **/ }
										<div className='row bag'
											onClick={() => this.setContent('bags')}
											onMouseLeave={() => this.mouseLeave('bags')}
											onMouseEnter={() => this.mouseEnter('bags')}
											style={this.state.styleBag}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>Bag Counters</h4>
											</div>
										</div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
									<Card.Title className='text-left'>
										{ /** Bookshelves **/ }
										<div className='row bookshelves'
											onClick={() => this.setContent('bookshelves')}
											onMouseLeave={() => this.mouseLeave('bookshelves')}
											onMouseEnter={() => this.mouseEnter('bookshelves')}
											style={this.state.styleBookshelves}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>Bookshelves</h4>
											</div>
										</div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
									<Card.Title className='text-left'>
										{ /** Computers **/ }
										<div className='row computers'
											onClick={() => this.setContent('computers')}
											onMouseLeave={() => this.mouseLeave('computers')}
											onMouseEnter={() => this.mouseEnter('computers')}
											style={this.state.styleComputers}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>Computers</h4>
											</div>
										</div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
									<Card.Title className='text-left'>
										{ /** Round Tables **/ }
										<div className='row tables'
											onClick={() => this.setContent('tables')}
											onMouseLeave={() => this.mouseLeave('tables')}
											onMouseEnter={() => this.mouseEnter('tables')}
											style={this.state.styleRoundTables}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>Round Tables</h4>
											</div>
										</div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
							<div className='row'>
								<div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
									<Card.Title className='text-left'>
										{ /** Breaker Boxes **/ }
										<div className='row breaker-boxes'
											onClick={() => this.setContent('breaker')}
											onMouseLeave={() => this.mouseLeave('breaker')}
											onMouseEnter={() => this.mouseEnter('breaker')}
											style={this.state.breakerBoxes}
										>
											<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
											</div>
											<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
												<h4>Breaker Boxes</h4>
											</div>
										</div>
									</Card.Title>
								</div>
								<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
					<Card className='bump shadow'>
						<Card.Body>
							<div className='row'>
								<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
									<Card.Title className='text-left'>
										{ this.state.content }
									</Card.Title>
								</div>
							</div>

							{/*<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>*/}
						</Card.Body>
					</Card>
				</div>
				<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
			</div>
			</div>			
		);
	}
}
export default Equipment;