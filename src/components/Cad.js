import React from 'react';

const Cad = (props) => {
	return(
		<div className='row'>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
			<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
				<div className='embed-responsive embed-responsive-16by9 bump shadow'>
					<iframe className='embed-responsive-item'
						src='https://myhub.autodesk360.com/ue2d6a58a/shares/public/SH7f1edQT22b515c761eda9003f79da03956?mode=embed'
						title={'autodesk'}/>
				</div>
			</div>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
		</div>

	);
}
export default Cad;