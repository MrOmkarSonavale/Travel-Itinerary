import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TripContext from '../context/tripContex';
import './ActivitiesPlan.css'; // Assuming you have a CSS file for styling

const ActivitiesPlan = () => {
	// const location = useLocation();
	const navigate = useNavigate();
	const { setActivities, basicInfo } = useContext(TripContext);

	const [currentDay, setCurrentDay] = useState(1);
	const [morning, setMorning] = useState('');
	const [afternoon, setAfternoon] = useState('');
	const [night, setNight] = useState('');
	const [showPDFButton, setShowPDFButton] = useState(false);

	const totalDays = basicInfo.TripDays ? parseInt(basicInfo.TripDays, 10) : 0;


	if (!totalDays) {
		return <p>Please go back and fill the basic information first.</p>;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const newActivity = {
			day: currentDay,
			morning,
			afternoon,
			night,
		};

		setActivities(prevData => ({
			...prevData,
			[currentDay]: newActivity
		}));

		if (currentDay < totalDays) {
			setCurrentDay(prev => prev + 1);
			setMorning('');
			setAfternoon('');
			setNight('');
		} else {
			setShowPDFButton(true);
			navigate('/hotel-details'); // Navigate to hotel details page
		}
	};



	return (
		<div className="activities-container">
			{!showPDFButton ? (
				<form className="activities-form"
					onSubmit={handleSubmit}>
					<h2>Day {currentDay} Activities In {basicInfo.destination}</h2>

					<div className="day-card">

						<label>Morning</label>
						<input
							type="text"
							value={morning}
							onChange={(e) => setMorning(e.target.value)}
							required
							placeholder="e.g., City tour"
						/>
					</div>

					<div className="day-card">

						<label>Afternoon</label>
						<input
							type="text"
							value={afternoon}
							onChange={(e) => setAfternoon(e.target.value)}
							required
							placeholder="e.g., Lunch + Shopping"
						/>
					</div>

					<div className="day-card">
						<label>Night</label>
						<input
							type="text"
							value={night}
							onChange={(e) => setNight(e.target.value)}
							required
							placeholder="e.g., Light show"
						/>
					</div>




					<button type="submit" className="next-day-btn">
						{currentDay < totalDays ? 'Save & Next Day' : 'Save Day & Finish'}
					</button>
				</form>
			) : (
				<div className="generate-section">
					<h2>All activities added!</h2>
					<button className="generate-pdf-btn" onClick={handleSubmit}>
						Next section
					</button>
				</div>
			)
			}
		</div >
	);
};

export default ActivitiesPlan;
