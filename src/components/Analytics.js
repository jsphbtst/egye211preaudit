import React from 'react';
import { Line } from 'react-chartjs-2';
import { DAY_OF_WEEK_OCCUPANCY, 
		HOUR_OF_DAY_OCCUPANCY,
		DAY_OF_MONTH_OCCUPANCY } from '../helpers/constants';

const Analytics = () => {
	return(
		<div className='row'>
			<div className='col-sm-1'></div>
			<div className='col-sm-10'>
				<div className='pull-left'>
					<h2 className='title'>Analytics</h2>
				</div>

				<div className='row'>
					<Line data={DAY_OF_WEEK_OCCUPANCY} height={100}/>
				</div>
				<br/>
				<div className='row'>
					<Line data={HOUR_OF_DAY_OCCUPANCY} height={100}/>
				</div>
				<br/>
				<div className='row'>
					<Line data={DAY_OF_MONTH_OCCUPANCY} height={100}/>
				</div>
					
				{ /*** 

				Insert react-chartjs-2 here, three time series graphs. Add a download link for the dataset also. 
				npm install --save react-chartjs-2 chart-js

				<Line data={DAY_OF_WEEK_OCCUPANCY}
					options={OPTIONS}
					height={300}/>

				***/ }
			</div>
			<div className='col-sm-1'></div>
		</div>
	);
}

export default Analytics;