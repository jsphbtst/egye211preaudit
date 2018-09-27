import React from 'react';

const Recommendations = (props) => {
	return(
		<div className='row'>
			<div className='col-sm-1 col-md-1'></div>
			
			<div className='col-sm-10 col-md-10 shadow bump'>
				<div className='pull-left'>
					<h2 className='title'><b>Recommendations</b></h2>
				</div>
				<p>
					Here are some of my recommendations. Blah.
				</p>
			</div>

			<div className='col-sm-1 col-md-10'></div>
		</div>
	);
}

export default Recommendations;