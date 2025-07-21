import React, { useContext, useState } from "react";
import "./CustomerInfoForm.css"; // Assuming you have a CSS file for stylin
import { useNavigate } from "react-router-dom";
import TripContext from "../context/tripContex";


function BasicInfoForm() {

	const { userName, setBasicInfo } = useContext(TripContext);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		departure: '',
		departureDate: '',
		arrivalDate: '',
		destination: '',
		travellers: '',
		TripDays: '',
	});


	const handleSubmit = (e) => {
		e.preventDefault();
		setBasicInfo(formData);
		navigate('/activity-info', { state: { formData } });
	};

	return (
		<form className="basic-info-form " onSubmit={handleSubmit}>

			<div className="form-title" style={{ marginBottom: "20px" }}>
				<h2>{userName} please enter the details to get start✈️ </h2>
			</div>


			<div className="form-group">
				<label>Departure </label>
				<input
					type="text"
					name="departure"
					value={formData.departure}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label>Departure Date</label>
				<input
					type="date"
					name="departureDate"
					value={formData.departureDate}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label>Arrival Date ⌚</label>
				<input
					type="date"
					name="arrivalDate"
					value={formData.arrivalDate}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label>Destination ✈️</label>
				<input
					type="text"
					name="destination"
					value={formData.destination}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label>No. of Travellers 🧑‍🤝‍🧑</label>
				<input
					type="number"
					name="travellers"
					value={formData.travellers}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label>Total Days of Trip 🧑‍🤝‍🧑</label>
				<input
					type="number"
					name="TripDays"
					value={formData.TripDays}
					onChange={handleChange}
					required
				/>
			</div>

			<button type="submit" className="submit-btn">Next: Plan Activities</button>
		</form>
	);
}

export default BasicInfoForm;
