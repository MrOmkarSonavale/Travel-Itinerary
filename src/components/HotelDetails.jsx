import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../context/tripContex';

const HotelDetails = () => {
  const navigate = useNavigate();
  const { setHotelDetails, basicInfo } = useContext(TripContext);
  const totalDays = basicInfo?.TripDays || 1;

  const [hotels, setHotels] = useState([
    { dayFrom: 1, dayTo: 1, city: '', hotelName: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...hotels];
    updated[index][field] = value;
    setHotels(updated);
  };

  const addHotel = () => {
    setHotels([...hotels, { dayFrom: hotels[hotels.length - 1].dayTo + 1, dayTo: hotels[hotels.length - 1].dayTo + 1, city: '', hotelName: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelDetails(hotels);
    navigate('/flight-info');
  };

  return (
    <div className="hotel-wrapper">
      <h2 className="title">Hotel Stay Details</h2>
      <form onSubmit={handleSubmit} className="hotel-form">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <div className="grid-2x2">
              <div className="input-group">
                <label>Day From:</label>
                <input
                  type="number"
                  min="1"
                  max={totalDays}
                  value={hotel.dayFrom}
                  onChange={(e) => handleChange(index, 'dayFrom', Number(e.target.value))}
                  required
                />
              </div>
              <div className="input-group">
                <label>Day To:</label>
                <input
                  type="number"
                  min={hotel.dayFrom}
                  max={totalDays}
                  value={hotel.dayTo}
                  onChange={(e) => handleChange(index, 'dayTo', Number(e.target.value))}
                  required
                />
              </div>
              <div className="input-group">
                <label>City:</label>
                <input
                  type="text"
                  value={hotel.city}
                  onChange={(e) => handleChange(index, 'city', e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Hotel Name:</label>
                <input
                  type="text"
                  value={hotel.hotelName}
                  onChange={(e) => handleChange(index, 'hotelName', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}

        <button type="button" className="add-btn" onClick={addHotel}>
          + Add Another Hotel
        </button>

        <button type="submit" className="next-btn">Next: Flight Details</button>
      </form>

      <style>{`
        .hotel-wrapper {
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
        .hotel-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hotel-card {
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
          background-color: #9d70c5ff;
          border: none;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        .add-btn:hover {
          background-color: #b08ad1ff;
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

export default HotelDetails;
