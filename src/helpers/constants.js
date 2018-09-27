export const OPTIONS = {
	elements: {
        point:{
            radius: 5
        }
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Ave. Num Occupants',
                fontSize: 15
            },
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    },
    legend: {
    	display: true
    }
};

const DAY_OF_WEEK_OCCUPANCY_DATA = [85.11, 213.65, 300.88, 299.18, 320.63, 160.0, 148.37];
const DAY_OF_WEEK_OCCUPANCY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const DAY_OF_WEEK_OCCUPANCY = {
	labels: DAY_OF_WEEK_OCCUPANCY_LABELS,
	datasets: [{ data: DAY_OF_WEEK_OCCUPANCY_DATA, label: 'Day of Week' }]
}

const HOUR_OF_DAY_OCCUPANCY_DATA = [28.1, 61.45, 97.0, 160.55, 220.48, 281.48, 335.9, 395.66, 426.41, 500.92];
const HOUR_OF_DAY_OCCUPANCY_WEEKEND_DATA = [11.75, 24.75, 33.5, 63.75, 137.75, 141.75, 148.25, 168.25, 182.25, 394.0];
const HOUR_OF_DAY_OCCUPANCY_LABELS = ['8-9', '9-10', '10-11', '11-12', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'];
export const HOUR_OF_DAY_OCCUPANCY = {
	labels: HOUR_OF_DAY_OCCUPANCY_LABELS,
	datasets: [{ data: HOUR_OF_DAY_OCCUPANCY_DATA, label: 'Weekday', fill: false },
               { data: HOUR_OF_DAY_OCCUPANCY_WEEKEND_DATA, label: 'Weekend', fill: false }]
}

const DAY_OF_MONTH_OCCUPANCY_DATA = [146.0, 160.1, 185.5, 227.7, 201.8, 26.11, 237.4, 233.8, 280.6, 334.6, 22.67, 303.9, 345.8, 264.3, 17.44, 327.44, 336.3, 374.5, 333.2, 148.7, 396.2, 364.2, 379.1, 218.3, 19.56, 206.0, 352.6, 248.9, 371.2];
const DAY_OF_MONTH_OCCUPANCY_LABEL = ['Aug 5', 'Aug 6', 'Aug 7', 'Aug 8', 'Aug 9', 'Aug 10', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30', 'Sept 3', 'Sept 4', 'Sept 5', 'Sept 6', 'Sept 7', 'Sept 8', 'Sept 10', 'Sept 11', 'Sept 12', 'Sept 13'];
export const DAY_OF_MONTH_OCCUPANCY = {
	labels: DAY_OF_MONTH_OCCUPANCY_LABEL,
	datasets: [{ data: DAY_OF_MONTH_OCCUPANCY_DATA, label: 'Day of Month' }]
}

export const AC_DESCRIPTION = 'There are 12 A/Cs in the building, all from the company Carrier rated at 2 horsepowers. A1, A4, A5, A7, A9, A10, A12, as can be seen from the photographed floor plan, are all scheduled for MWFs. On the other hand, A2, A6, A8, an A11 are all scheduled for TThs. Consequently, A4 and A5 run during TThs also, while A3 is broken.';

export const BAG_DESCRIPTION = 'Bag description.';

export const BOOKSHELF_DESCRIPTION = 'Bookshelf description.';

export const PC_DESCRIPTION = 'Computers description.';

export const TABLE_DESCRIPTION = 'Tables description.';

export const EP_DESCRIPTION = 'Breaker box description.';