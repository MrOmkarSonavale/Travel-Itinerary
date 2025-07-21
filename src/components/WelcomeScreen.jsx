import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';
import TripContext from '../context/tripContex';
import { useContext } from 'react';

const WelcomeScreen = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const { setUserName } = useContext(TripContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim()) {
			setUserName(name);
			navigate('/basic-info');
		}
	};

	return (
		<div className="welcome-container">
			<h1 className="brand-name">
				<span className="black">Vi</span>
				<span className="purple">go</span>
				<span className="black">via</span>
			</h1>
			<h2>Welcome to our travel planner!</h2>
			<p>Enter your name to begin your journey:</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Your Name"
					value={name}
					required
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit">Proceed</button>
			</form>
		</div>
	);
};

export default WelcomeScreen;
