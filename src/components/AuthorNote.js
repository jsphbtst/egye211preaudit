import React from 'react';

const AuthorNote = (props) => {
	return(
		<div className='row'>
			<div className='col-sm-1 col-md-1'></div>
			
			<div className='col-sm-10 col-md-10'>
				<div className='pull-left'>
					<h2 className='title'><b>Author's Note</b></h2>
				</div>
				<p>
					The CAD file from above was from previous students of EgyE 211. All the photos and data from this project were done in collaboration with my fellow classmates in EgyE 211 AY 2018-2019. Note that only the data was shared, all previous recommendations and analytics from said data was done solely by me in my fullest capacity.
				</p>
			</div>

			<div className='col-sm-1 col-md-10'></div>
		</div>
	);
}
export default AuthorNote;