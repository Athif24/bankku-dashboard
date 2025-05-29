import React from 'react';
import './LoanTypeCard.css';

const LoanTypeCard = ({ loanType, onClick }) => {
  return (
    <div 
      className="loan-type-card"
      style={{ 
        backgroundColor: loanType.bgColor,
        color: loanType.textColor 
      }}
      onClick={() => onClick && onClick(loanType)}
    >
      <div className="loan-icon-container">
        <div className="loan-icon">
          <span className="icon-emoji">{loanType.icon}</span>
        </div>
      </div>
      <div className="loan-info">
        <h3 className="loan-type-name">{loanType.type}</h3>
        <p className="loan-amount">{loanType.amount}</p>
      </div>
    </div>
  );
};

export default LoanTypeCard;