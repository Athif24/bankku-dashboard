import React from 'react';
import { WEEKLY_ACTIVITY_DATA } from '../../../data/staticData';
import './WeeklyActivity.css';

const WeeklyActivity = () => {
  const maxValue = Math.max(...WEEKLY_ACTIVITY_DATA.map(item => Math.max(item.deposit, item.withdraw)));

  return (
    <div className="weekly-activity-wrapper">
      {/* Header di luar kotak putih */}
      <div className="section-header">
        <h2 className="section-title">Weekly Activity</h2>
      </div>
      
      {/* Kotak putih hanya untuk chart content */}
      <div className="weekly-activity-card">
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-dot deposit"></div>
            <span className="legend-text">Deposit</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot withdraw"></div>
            <span className="legend-text">Withdraw</span>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-bars">
            {WEEKLY_ACTIVITY_DATA.map((item, index) => (
              <div key={index} className="bar-group">
                <div className="bars">
                  <div 
                    className="bar deposit-bar"
                    style={{ 
                      height: `${(item.deposit / maxValue) * 100}%` 
                    }}
                  ></div>
                  <div 
                    className="bar withdraw-bar"
                    style={{ 
                      height: `${(item.withdraw / maxValue) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="day-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;