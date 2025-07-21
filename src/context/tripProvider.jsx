// src/context/TripProvider.jsx
import { useState } from 'react';
import TripContext from './tripContex';

const TripProvider = ({ children }) => {
	const [basicInfo, setBasicInfo] = useState({});
	const [activities, setActivities] = useState({});
	const [hotelDetails, setHotelDetails] = useState({});
	const [userName, setUserName] = useState('');
	const [flights, setFlights] = useState([]);
	const [activitiesForm, setActivitiesForm] = useState(
		[]
	);

	const addActivity = (activity) => {
		setActivitiesForm((prev) => [...prev, activity]);
	};

	return (
		<TripContext.Provider value={{ basicInfo, setBasicInfo, activities, setActivities, hotelDetails, setHotelDetails, userName, setUserName, flights, setFlights, activitiesForm, addActivity }}>
			{children}
		</TripContext.Provider>
	);
};

export default TripProvider;	
