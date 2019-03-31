import React from 'react';
import './style.css';

const Recommendations = (props) => {
	return(
		<div className='Recommendations'>
			<div className='reco-header'>
				<p>Recommendations</p>
			</div>
			<div className="reco-content">
				<ul>
					<p>Instead of half of the A/Cs being alternatively scheduled between MWFs and TThSs, I propose the schedule to be TWTh, MF, and the weekends. My recommendation is based on the average number of occupants, with TWTh having the most amount according to the data, MF having the next most, and the weekend obviously having the least.</p>
					<p>A more granular approach that the library can take is to schedule the A/Cs successively throughout the day. The graph above tells us that the average number of occupants as the day goes by increases, with its lowest at the start of the day, and its peak at the end of the day. This will require a more active approach from the staff, but this will surely lead to more energy savings.</p>
					<p>Four of the A/Cs are currently being blocked by bookshelves. One quick fix recommendation is to either relocate these A/Cs, or to just lift them up further from the ground so that they don't get blocked anymore. This is also an optimal solution since cold air falls.</p>
					<p>The same can be said for the scheduling of the computers. Since most computers aren't being actively used for 10 hours straight anyway, all seven could be operational during TWTh, around five or six for MF, and two or three for the weekends. We can also take advantage of the fact that most students have their own laptops with access to Wifi@UPD and Dilnet, reducing the need to use the computers in the library to check the online catalogue.</p>
					<p>In addition to the day-of-the-week scheduling approach for computers, the same can be said for a granular hour-of-the-day approach. Perhaps we should also look at the possibility of either removing all or some of the computers from the library altogether in future detailed audits.</p>
				</ul>
			</div>
		</div>
	);
}

export default Recommendations;