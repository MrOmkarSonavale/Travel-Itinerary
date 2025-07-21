// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
import { useContext } from "react";
import TripContext from "../context/tripContex";
import dayjs from "dayjs";
import "./GeneratePDF.css"; // Assuming you have a CSS file for styling
import html2pdf from "html2pdf.js";
import { Navigate } from "react-router-dom";
const GeneratePDF =
	() => {

		const {
			userName,
			basicInfo,
			activities,
			flights,
			hotelDetails,
			activitiesForm,
		} = useContext(TripContext);

		// const pdfRef = useRef();


		// const handlePrint = useReactToPrint({
		// 	content: () => pdfRef.current,
		// 	documentTitle: "Travel Itinerary",
		// });


		const handleDownload = () => {
			const element = document.getElementById("pdf-content");

			const options = {
				margin: 0.5,
				filename: "Travel-Itinerary.pdf",
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: { scale: 2 },
				jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
			};

			html2pdf().set(options).from(element).save();
		};

		return (
			<div className="pdf-wrapper">
				{/* <button onClick={handlePrint} className="print-btn">
					Download Itinerary PDF
				</button> */}
				<button onClick={handleDownload}
					style={{ marginRight: "10px" }}
				>Download PDF</button>
				<button onClick={() => Navigate("/")}>GO TO HOME</button>

				<div className="pdf-content"
					id="pdf-content"
				>
					{/* Logo */}
					<div div className="logo-section">
						<h1 className="logo">VIGOVIA</h1>
						<p className="tagline">PLAN.PACK.GO</p>
					</div>

					{/* Trip Header */}
					<div className="trip-header-box">
						<h2>Hi {userName || "Traveler"}!</h2>
						<p>You're going to <strong>{basicInfo.destination}</strong></p>
						<p>Trip Duration: <strong>{basicInfo.days} Days</strong></p>
					</div>

					{/* Trip Summary */}
					<div className="trip-summary-box">
						{/* <div>
							<strong>Departure City:</strong> {basicInfo.departure}
						</div> */}
						<div>
							<strong>Departure Date:</strong> {basicInfo.departureDate}
						</div>
						<div>
							<strong>Arrival Date
								:</strong> {basicInfo.arrivalDate}
						</div>
						<div>
							<strong>Arrival Destination:</strong> {basicInfo.destination}
						</div>
						<div>
							<strong>No. of Travelers:</strong> {basicInfo.travellers}
						</div>
					</div>

					{/* Day-wise Plan */}
					<h3 className="section-title">Day-wise Plan</h3>
					<div className="info-table">
						{Object.values(activities).map((day, i) => (
							<div key={i} className="row">
								<p><strong>Day {day.day}:</strong></p>
								<p><strong>Morning:</strong> {day.morning}</p>
								<p><strong>Afternoon:</strong> {day.afternoon}</p>
								<p><strong>Evening:</strong> {day.night}</p>
							</div>
						))}
					</div>


					{/* Flight Summary */}
					{/* <h3 className="section-title">Flight Summary</h3>
					<div className="info-table">
						{flights.map((flight, i) => (
							<div key={i} className="row">
								<p><strong>Airline:</strong> {flight.airline}</p>
								<p><strong>From:</strong> {flight.from}</p>
								<p><strong>To:</strong> {flight.to}</p>
								<p><strong>Date:</strong> {dayjs(flight.date).format("DD MMM YYYY")}</p>
								<p><strong>Time:</strong> {flight.time}</p>
							</div>
						))}
					</div> */}

					<h3 className="section-title">Flight Summary</h3>
					<div className="info-table">
						{flights.map((flight, i) => (
							<div key={i} className="flight-row">
								<p><strong>Airline:</strong> {flight.airline}</p>
								<p><strong>From:</strong> {flight.from}</p>
								<p><strong>To:</strong> {flight.to}</p>
								<p><strong>Date:</strong> {dayjs(flight.date).format("DD MMM YYYY")}</p>
								<p><strong>Time:</strong> {flight.time}</p>
							</div>
						))}
					</div>

					{/* Hotel Booking */}
					<h3 className="section-title">Hotel Bookings</h3>
					<div className="info-table">
						{Object.values(hotelDetails).map((hotel, i) => (
							<div key={i} className="row">
								<p><strong>City:</strong> {hotel.city}</p>
								<p><strong>Hotel Name:</strong> {hotel.hotelName}</p>
								<p><strong>Check-In:</strong> {dayjs(hotel.checkIn).format("DD MMM YYYY")}</p>
								<p><strong>Check-Out:</strong> {dayjs(hotel.checkOut).format("DD MMM YYYY")}</p>
							</div>
						))}
					</div>

					{/* Activities */}
					<h3 className="section-title">Activities</h3>
					<div className="info-table">
						{activitiesForm.map((act, i) => (
							<div key={i} className="row">
								<p><strong>Day:</strong> {act.day + 1}</p>
								<p><strong>Activity:</strong> {act.activity}</p>
								<p><strong>Type:</strong> {act.activityType}</p>
								<p><strong>City:</strong> {act.city}</p>
								<p><strong>Duration:</strong> {act.duration}</p>
							</div>
						))}
					</div>
				</div>

			</div>
		);
	};

export default GeneratePDF;
