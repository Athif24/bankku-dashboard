// src/components/Dashboard/BalanceHistory/BalanceHistory.jsx
import React from 'react';
import './BalanceHistory.css';

const BalanceHistory = () => {
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  
  return (
    <div className="balance-history-wrapper">
      {/* Header di luar kotak putih */}
      <div className="section-header">
        <h2 className="section-title">Balance History</h2>
      </div>
      
      {/* Kotak putih hanya untuk chart */}
      <div className="balance-history-card">
        <div className="chart-container">
          <div className="chart-wrapper">
            <svg className="balance-chart-svg" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Gradient for area fill */}
                <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2D60FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2D60FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              <g className="grid-lines">
                {[60, 120, 180, 240].map((y, index) => (
                  <line
                    key={index}
                    x1="40"
                    y1={y}
                    x2="560"
                    y2={y}
                    strokeDasharray="0"
                  />
                ))}
              </g>
              
              {/* Y-axis values */}
              <g className="y-axis-labels">
                <text x="25" y="65" textAnchor="end">800</text>
                <text x="25" y="125" textAnchor="end">600</text>
                <text x="25" y="185" textAnchor="end">400</text>
                <text x="25" y="245" textAnchor="end">200</text>
                <text x="25" y="280" textAnchor="end">0</text>
              </g>
              
              {/* Area under the curve */}
              <path
                d="M 50 220 
                   C 120 200, 160 180, 180 160
                   C 200 140, 220 100, 260 80
                   C 300 60, 340 80, 360 120
                   C 380 160, 400 140, 420 100
                   C 440 60, 480 80, 520 90
                   C 540 95, 550 90, 560 85
                   L 560 280 L 50 280 Z"
                fill="url(#balanceGradient)"
              />
              
              {/* Main line curve */}
              <path
                d="M 50 220 
                   C 120 200, 160 180, 180 160
                   C 200 140, 220 100, 260 80
                   C 300 60, 340 80, 360 120
                   C 380 160, 400 140, 420 100
                   C 440 60, 480 80, 520 90
                   C 540 95, 550 90, 560 85"
                stroke="#1814F3"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* X-axis labels */}
          <div className="month-labels">
            {months.map((month, index) => (
              <span key={index} className="month-label">{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;