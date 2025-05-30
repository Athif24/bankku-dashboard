import React from 'react';
import { EXPENSE_STATISTICS } from '../../../data/staticData';
import './ExpenseChart.css';

const ExpenseChart = () => {
  const centerCategory = EXPENSE_STATISTICS.find(item => item.category === 'Entertainment');
  
  // Calculate stroke-dasharray and stroke-dashoffset for each segment
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  let cumulativePercentage = 0;
  const segments = EXPENSE_STATISTICS.map(item => {
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (item.percentage / 100) * circumference;
    const rotation = (cumulativePercentage / 100) * 360;
    
    cumulativePercentage += item.percentage;
    
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
      rotation
    };
  });

  return (
    <div className="expense-chart-wrapper">
      {/* Header di luar kotak putih */}
      <div className="section-header">
        <h2 className="section-title">Expense Statistics</h2>
      </div>
      
      {/* Kotak putih hanya untuk chart content */}
      <div className="expense-chart-card">
        <div className="chart-content">
          <div className="pie-chart-container">
            <div className="pie-chart">
              <svg className="chart-svg" viewBox="0 0 100 100">
                {segments.map((segment, index) => (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={segment.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={segment.strokeDasharray}
                    strokeDashoffset={segment.strokeDashoffset}
                    strokeLinecap="round"
                    style={{
                      transformOrigin: '50% 50%',
                      transform: `rotate(${segment.rotation - 90}deg)`
                    }}
                  />
                ))}
              </svg>
              <div className="chart-center">
                <span className="center-percentage">{centerCategory?.percentage}%</span>
                <span className="center-label">{centerCategory?.category}</span>
              </div>
            </div>
          </div>
          <div className="chart-legend-list">
            {EXPENSE_STATISTICS.map((item, index) => (
              <div key={index} className="legend-row">
                <div className="legend-info">
                  <div 
                    className="legend-color"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-category">{item.category}</span>
                </div>
                <span className="legend-percentage">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;