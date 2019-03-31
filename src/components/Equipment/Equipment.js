import React from 'react';
import './style.css';
import './content.css';

import { renderAC, renderBreaker, renderBag, 
	renderBook, renderPC, renderTable } from './equipmentList';

class Equipment extends React.Component {
	state = {
		content: 'something something',
		currentTab: 'AC',
		styleAC: { borderBottom: "2px solid black" },
		styleBag: { borderBottom: "2px solid grey" },
		styleBooks: { borderBottom: "2px solid grey" },
		styleComps: { borderBottom: "2px solid grey" },
		styleTables: { borderBottom: "2px solid grey" },
		styleBreaker: { borderBottom: "2px solid grey" },
	};

	switchAC = () => {
		const styleAC = { borderBottom: "2px solid black" };
		const styleBag = { borderBottom: "2px solid grey" };
		const styleBooks = { borderBottom: "2px solid grey" };
		const styleComps = { borderBottom: "2px solid grey" };
		const styleTables = { borderBottom: "2px solid grey" };
		const styleBreaker = { borderBottom: "2px solid grey" };

		this.setState({ currentTab: 'AC', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchAC = this.switchAC.bind(this);

	switchBag = () => {
		const styleAC = { borderBottom: "2px solid grey" };
		const styleBag = { borderBottom: "2px solid black" };
		const styleBooks = { borderBottom: "2px solid grey" };
		const styleComps = { borderBottom: "2px solid grey" };
		const styleTables = { borderBottom: "2px solid grey" };
		const styleBreaker = { borderBottom: "2px solid grey" };
		this.setState({ currentTab: 'Bag', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchBag = this.switchBag.bind(this);

	switchBooks = () => {
		const styleAC = { borderBottom: "2px solid grey" };
		const styleBag = { borderBottom: "2px solid grey" };
		const styleBooks = { borderBottom: "2px solid black" };
		const styleComps = { borderBottom: "2px solid grey" };
		const styleTables = { borderBottom: "2px solid grey" };
		const styleBreaker = { borderBottom: "2px solid grey" };

		this.setState({ currentTab: 'Books', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchBooks = this.switchBooks.bind(this);

	switchComps = () => {
		const styleAC = { borderBottom: "2px solid grey" };
		const styleBag = { borderBottom: "2px solid grey" };
		const styleBooks = { borderBottom: "2px solid grey" };
		const styleComps = { borderBottom: "2px solid black" };
		const styleTables = { borderBottom: "2px solid grey" };
		const styleBreaker = { borderBottom: "2px solid grey" };

		this.setState({ currentTab: 'Comps', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchComps = this.switchComps.bind(this);

	switchTables = () => {
		const styleAC = { borderBottom: "2px solid grey" };
		const styleBag = { borderBottom: "2px solid grey" };
		const styleBooks = { borderBottom: "2px solid grey" };
		const styleComps = { borderBottom: "2px solid grey" };
		const styleTables = { borderBottom: "2px solid black" };
		const styleBreaker = { borderBottom: "2px solid grey" };

		this.setState({ currentTab: 'Tables', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchTables = this.switchTables.bind(this);

	switchBreaker = () => {
		const styleAC = { borderBottom: "2px solid grey" };
		const styleBag = { borderBottom: "2px solid grey" };
		const styleBooks = { borderBottom: "2px solid grey" };
		const styleComps = { borderBottom: "2px solid grey" };
		const styleTables = { borderBottom: "2px solid grey" };
		const styleBreaker = { borderBottom: "2px solid black" };

		this.setState({ currentTab: 'Breaker', 
			styleAC, styleBag, styleBooks, styleComps, styleTables, styleBreaker });
	}; switchBreaker = this.switchBreaker.bind(this);


	renderContent = () => {
		const { currentTab } = this.state;
		switch(currentTab) {
			case 'AC':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>There are 12 two horsepower Carrier A/Cs. Seven of them are scheduled for MWFs, while 6 of them are scheduled for TThSs. Moreover, one A/C is broken, and two A/Cs run from Mondays to Saturdays. These A/Cs run for 10 hours, amounting to 50,888.7 BTU—MWFs at 365,220.9 BTUs and TTHSs at 305,332.2 BTUs.</p>
					</div>

					<div className="image-gallery">
						{ renderAC() }
					</div>
				</React.Fragment>
				);
			case 'Bag':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>There are four bag counters in the library with different dimensions. Refer to the images below for dimensions.</p>
					</div>

					<div className="image-gallery">
						{ renderBag() }
					</div>				
				</React.Fragment>
				);
			case 'Books':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>There are eight bookshelves in the library. It is important to note that there are four bookshelves that block four A/Cs.</p>
					</div>

					<div className="image-gallery">
						{ renderBook() }
					</div>				
				</React.Fragment>
				);
			case 'Comps':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>There are seven computers in the library all rated at 120 W with a 325 W UPS. They are all open the entire operation of the library, amounting to 1.2 kWh per computer, for a total of 8.4 kWh for all seven computers.</p>
					</div>

					<div className="image-gallery">
						{ renderPC() }
					</div>				
				</React.Fragment>
				);
			case 'Tables':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>The round tables are also used for studying by the students and can accommodate two people. For the dimensions please refer to the photo below.</p>
					</div>

					<div className="image-gallery">
						{ renderTable() }
					</div>				
				</React.Fragment>
				);
			case 'Breaker':
				return(
				<React.Fragment>
					<div className="p-content">
						<p>There are five breaker boxes in the library.</p>
					</div>

					<div className="image-gallery">
						{ renderBreaker() }
					</div>				
				</React.Fragment>
				);
			default:
				return null;
		};
	}; renderContent = this.renderContent.bind(this);

	render() {
		return(
			<div className="Equipment">
				<div className='nav'>
					<p className='header'>Equipment</p>
					<label for="toggle">&#9776;</label>
					<input type="checkbox" id="toggle"/>
					<div className="menu">
						<div className="menu-elements">
						<a style={this.state.styleAC} onClick={this.switchAC}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
							<p>AC</p>
						</a>
						<a style={this.state.styleBag} onClick={this.switchBag}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg>
							<p>Bag Counters</p>
						</a>
						<a style={this.state.styleBooks} onClick={this.switchBooks}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
							<p>Bookshelves</p>
						</a>
						<a style={this.state.styleComps} onClick={this.switchComps}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
							<p>Computers</p>
						</a>
						<a style={this.state.styleTables} onClick={this.switchTables}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
							<p>Round Tables</p>
						</a>
						<a style={this.state.styleBreaker} onClick={this.switchBreaker}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
							<p>Breaker Boxes</p>
						</a>
						</div>
					</div>
				</div>

				<div className="content-container">
					{ this.renderContent() }
				</div>
			</div>
		);
	}
};
export default Equipment;