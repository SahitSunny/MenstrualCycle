// CycleTracker.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/cycletracker.css'; // Import the specific CSS file

const CycleTracker = () => {
  const [cycleData, setCycleData] = useState({
    startDate: '',
    endDate: '',
    symptoms: '',
  });

  const handleChange = (e) => {
    setCycleData({ ...cycleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cycle-tracker', cycleData);
      if (response.data.success) {
        alert('Cycle data logged successfully');
      }
    } catch (error) {
      console.error('Cycle tracking error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-536493">
      <form onSubmit={handleSubmit} className="cycle-tracker-form">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="startDate">
            Start Date:
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={cycleData.startDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="endDate">
            End Date:
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={cycleData.endDate}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="symptoms">
            Symptoms:
          </label>
          <textarea
            name="symptoms"
            id="symptoms"
            value={cycleData.symptoms}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Log Cycle Data
        </button>
      </form>
    </div>
  );
};

export default CycleTracker;
