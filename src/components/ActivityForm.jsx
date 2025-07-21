import React, {
	useContext, useState
} from "react";
import TripContext from "../context/tripContex";
import { useNavigate } from "react-router-dom";
import GeneratePDF from "./GeneratePDF"; // PDF component
// import { forwardRef } from "react";
// import { useReactToPrint } from "react-to-print";

const ActivityForm = () => {
	const navigate = useNavigate();
	const { basicInfo, addActivity } = useContext(TripContext);
	const [dayIndex, setDayIndex] = useState(1);
	const [formData, setFormData] = useState({
		activity: "",
		activityType: "",
		city: "",
		duration: "", // now a text field
	});

	const totalDays = basicInfo?.TripDays || 1;




	// const pdfRef = useRef();
	// const handlePrint = useReactToPrint({
	// 	content: () => pdfRef.current,
	// 	documentTitle: "Itinerary",
	// });

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { activity, activityType, city, duration } = formData;

		if (!activity || !activityType || !city || !duration) {
			alert("All fields are required");
			return;
		}

		addActivity({ ...formData, day: dayIndex });

		setFormData({
			activity: "",
			activityType: "",
			city: "",
			duration: "",
		});

		if (dayIndex < totalDays) {
			setDayIndex((prev) => prev + 1);
		} else {

			navigate("/generate-pdf");
		}
	};

	return (
		<div style={{ maxWidth: "600px", margin: "2rem auto" }}>
			<h2 style={{ textAlign: "center" }}>Day {dayIndex} - Plan Activity of total {totalDays} days</h2>
			<form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
				<input
					type="text"
					name="activity"
					placeholder="Activity"
					value={formData.activity}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="activityType"
					placeholder="Activity Type"
					value={formData.activityType}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="city"
					placeholder="City"
					value={formData.city}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="duration"
					placeholder="Duration (e.g. 9 AM - 12 PM)"
					value={formData.duration}
					onChange={handleChange}
					required
				/>

				<button type="submit">
					{dayIndex === totalDays ? "Finish" : "Next Day"}
				</button>
			</form>
			{/* 
			<div style={{ display: "none" }}>
				<GeneratePDF ref={pdfRef} />
			</div> */}
		</div>
	);
};

export default ActivityForm;
