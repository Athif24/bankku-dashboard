import React from 'react';
import './BalanceHistory.css';

const BalanceHistory = () => {
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  
  return (
    <div className="balance-history-section card">
      <h2 className="section-title">Balance History</h2>
      <div className="chart-area">
        <div className="line-chart">
          <svg className="chart-svg" viewBox="0 0 400 200">
            <defs>
              <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-blue)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--primary-blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            <g className="grid-lines">
              {[0, 200, 400, 600, 800].map((y, index) => (
                <line
                  key={index}
                  x1="0"
                  y1={200 - (y / 800) * 160}
                  x2="400"
                  y2={200 - (y / 800) * 160}
                  stroke="var(--gray-200)"
                  strokeWidth="1"
                />
              ))}
            </g>
            
            {/* Area under curve */}
            <path
              d="M0,150 Q50,100 100,120 T200,80 T300,100 T400,60 L400,200 L0,200 Z"
              fill="url(#balanceGradient)"
            />
            
            {/* Main line */}
            <path
              d="M0,150 Q50,100 100,120 T200,80 T300,100 T400,60"
              stroke="var(--primary-blue)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            <g className="data-points">
              {[{x: 0, y: 150}, {x: 100, y: 120}, {x: 200, y: 80}, {x: 300, y: 100}, {x: 400, y: 60}].map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="var(--primary-blue)"
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </g>
          </svg>
        </div>
        <div className="x-axis-labels">
          {months.map((month, index) => (
            <span key={index} className="month-label">{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;