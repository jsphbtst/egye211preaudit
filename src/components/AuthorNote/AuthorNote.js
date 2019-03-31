import React from 'react';
import './style.css';

const AuthorNote = (props) => {
	return(
		<div className='AuthorNote'>
			<div className='author-note-header'>
				<p>Author's Note</p>
			</div>
			<div className="author-note-content">
				<p>The CAD file from above was from previous students of EgyE 211. All the photos and data from this project were done in collaboration with my fellow classmates in EgyE 211 AY 2018-2019. Note that only the data was shared, all previous recommendations and analytics from said data were done solely by me in my fullest capacity.</p>
			</div>
		</div>
	);
}
export default AuthorNote;