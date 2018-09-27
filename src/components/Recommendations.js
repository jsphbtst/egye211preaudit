import React from 'react';

const Recommendations = (props) => {
	return(
		<div className='row'>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
			<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 bump shadow'>
				<div className='pull-left'>
					<h2 className='title'><b>Recommendations</b></h2>
				</div>
				<p>
					According to the data, 
				</p>
			</div>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
		</div>
	);
}

export default Recommendations;