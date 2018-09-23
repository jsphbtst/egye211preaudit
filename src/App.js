import React, { Component }  from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth * 0.60,
			height: window.innerHeight * 0.60
		}
	}

	render() {
		return(
			<div className='App'>
				<h2 className='title'>EgyE 211 Engineering Library 1 Pre-Energy Audit</h2>
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
			</div>
		);
	}
}
export default App;