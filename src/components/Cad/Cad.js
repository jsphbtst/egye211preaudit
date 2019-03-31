import React from 'react';
import './style.css';

const Cad = (props) => {
	return(
		<div className='cad'>
			<div className='cad-el'>
				<iframe src='https://myhub.autodesk360.com/ue2d6a58a/shares/public/SH7f1edQT22b515c761eda9003f79da03956?mode=embed'
					title={'autodesk'}
					align={'center'}
					allowfullscreen/>
			</div>
			<div className="p-dsc">
				<p className='h-dsc'>CAD File View</p>

				<p className='cad-dsc'>Here we see the floor plan of the UPD College of Engineering Library I's in CAD format.</p>
			</div>
		</div>

	);
}
export default Cad;