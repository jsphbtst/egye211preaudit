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
					<h2 className='title'><b>Analytics</b></h2>
				</div>


				<div className='row'>
					<Line data={DAY_OF_MONTH_OCCUPANCY} height={80}/>
				</div>
				<br/>
				<div className='row'>
					<div className='col-sm-6'>
						<Line data={HOUR_OF_DAY_OCCUPANCY} height={100}/>
					</div>
					<div className='col-sm-6'>
						<Line data={DAY_OF_WEEK_OCCUPANCY} height={100}/>
					</div>
				</div>
			</div>
			<div className='col-sm-1'></div>
		</div>
	);
}

export default Analytics;