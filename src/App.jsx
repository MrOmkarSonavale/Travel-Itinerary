// import React, { useState } from "react";
import CustomerInfoForm from "./components/CustomerInfoForm.jsx";
import VigoviaLogo from "./components/VigovioLogo.jsx";
import { Routes, Route } from "react-router-dom";
import "./index.css"; // Assuming you have a CSS file for global styles
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import ActivitiesPlan from "./components/ActivitiesPLan.jsx";
import HotelDetails from "./components/HotelDetails.jsx";
import Flights from "./components/Flights.jsx";
import ActivityForm from "./components/ActivityForm.jsx";
import GeneratePDF from "./components/GeneratePDF.jsx";

function App() {
	return (

		<div className="container">
			{/* <VigoviaLogo /> */}
			<Routes>
				<Route
					path="/"
					element={<WelcomeScreen />}
				/>
				<Route
					path="/basic-info"
					element={<CustomerInfoForm />}
				/>
				<Route
					path="/activity-info"
					element={<ActivitiesPlan />}
				/>

				<Route
					path="/hotel-details"
					element={<HotelDetails />}
				/>

				<Route
					path="/flight-info"
					element={<Flights />}
				/>

				<Route
					path="/activities"
					element={<ActivityForm />}
				/>

				<Route path="/generate-pdf"
					element={<GeneratePDF />}
				/>
			</Routes>
		</div>

	);
}

export default App;
