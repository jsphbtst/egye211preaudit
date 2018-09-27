import React from 'react';

const Recommendations = (props) => {
	return(
		<div className='row'>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
			<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 bump shadow'>
				<div className='pull-left'>
					<h2 className='title'><b>Recommendations</b></h2>
				</div>
				<ul>
					<li><p>Instead of half of the A/Cs being alternatively scheduled between MWFs and TThSs, I propose the schedule to be TWTh, MF, and the weekends. My recommendation is based on the average number of occupants, with TWTh having the most amount according to the data, MF having the next most, and the weekend obviously having the least.</p></li>
					<li><p>A more granular approach that the library can take is to schedule the A/Cs successively throughout the day. The graph above tells us that the average number of occupants as the day goes by increases, with its lowest at the start of the day, and its peak at the end of the day. This will require a more active approach from the staff, but this will surely lead to more energy savings.</p></li>
					<li><p>Four of the A/Cs are currently being blocked by bookshelves. One quick fix recommendation is to either relocate these A/Cs, or to just lift them up further from the ground so that they don't get blocked anymore. This is also an optimal solution since cold air falls.</p></li>
					<li><p>The same can be said for the scheduling of the computers. Since most computers aren't being actively used for 10 hours straight anyway, all seven could be operational during TWTh, around five or six for MF, and two or three for the weekends. We can also take advantage of the fact that most students have their own laptops with access to Wifi@UPD and Dilnet, reducing the need to use the computers in the library to check the online catalogue.</p></li>
					<li><p>In addition to the day-of-the-week scheduling approach for computers, the same can be said for a granular hour-of-the-day approach. Perhaps we should also look at the possibility of either removing all or some of the computers from the library altogether in future detailed audits.</p></li>
				</ul>
			</div>
			<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
		</div>
	);
}

export default Recommendations;

/***
<li><p>Energy Star <a href='https://www.energystar.gov/index.cfm?c=roomac.pr_properly_sized'>recommends</a> __ BTU for __ square feet. The area of the entire library is 528.5 square feet, resulting in 674.0 BTUs per square feet every MWFs and 577.7 BTUs per square feet every TThSs. Energy Star recommends adding 600 BTU per person, MWFs</p></li>
***/