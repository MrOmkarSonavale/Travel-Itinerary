import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TripContext from '../context/tripContex';

const Flights = () => {
  const navigate = useNavigate();
  const { setFlights } = useContext(TripContext);

  const [flightList, setFlightList] = useState([
    { airline: '', time: '', from: '', to: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...flightList];
    updated[index][field] = value;
    setFlightList(updated);
  };

  const addFlight = () => {
    setFlightList([...flightList, { airline: '', time: '', from: '', to: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlights(flightList);
    navigate('/activities');
  };

  return (
    <div className="flight-wrapper">
      <h2 className="title">Flight Details</h2>
      <form onSubmit={handleSubmit} className="flight-form">
        {flightList.map((flight, index) => (
          <div key={index} className="flight-card">
            <div className="grid-2x2">
              <div className="input-group">
                <label>Airline:</label>
                <input
                  type="text"
                  value={flight.airline}
                  onChange={(e) => handleChange(index, 'airline', e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Time:</label>
                <input
                  type="datetime-local"
                  value={flight.time}
                  onChange={(e) => handleChange(index, 'time', e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>From:</label>
                <input
                  type="text"
                  value={flight.from}
                  onChange={(e) => handleChange(index, 'from', e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>To:</label>
                <input
                  type="text"
                  value={flight.to}
                  onChange={(e) => handleChange(index, 'to', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}

        <button type="button" className="add-btn" onClick={addFlight}>
          + Add Another Flight
        </button>

        <button type="submit" className="next-btn">Next: Activities</button>
      </form>

      <style>{`
        .flight-wrapper {
          max-width: 750px;
          margin: 40px auto;
          padding: 30px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #fff;
        }
        .title {
          text-align: center;
          font-size: 28px;
          margin-bottom: 30px;
          color: #541C9C;
        }
        .flight-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .flight-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          background-color: #fafafa;
        }
        .grid-2x2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
        }
        .input-group label {
          margin-bottom: 6px;
          font-weight: bold;
        }
        .input-group input {
          padding: 8px 12px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #bbb;
        }
        .add-btn {
          margin-top: 10px;
          padding: 10px;
          background-color: #541C9C;
          border: none;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        .add-btn:hover {
          background-color: #680099;
        }
        .next-btn {
          margin-top: 20px;
          padding: 12px;
          background-color: #541C9C;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }
        .next-btn:hover {
          background-color: #680099;
        }

        @media (max-width: 600px) {
          .grid-2x2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Flights;
