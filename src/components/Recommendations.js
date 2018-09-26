import React from 'react';

const Recommendations = (props) => {
	return(
		<div className='row'>
			<div className='col-sm-1'></div>
			
			<div className='col-sm-10'>
				<div className='pull-left'>
					<h2 className='title'><b>Recommendations</b></h2>
				</div>
				{ /* Insert recommendations here */ }
			</div>

			<div className='col-sm-1'></div>
		</div>
	);
}

export default Recommendations;