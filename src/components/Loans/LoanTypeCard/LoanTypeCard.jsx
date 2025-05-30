import React from 'react';
import './LoanTypeCard.css';

const LoanTypeCard = ({ loanType, onClick }) => {
  return (
    <div 
      className="loan-type-card"
      onClick={() => onClick && onClick(loanType)}
    >
      <div className="loan-card-content">
        <div className="loan-icon-wrapper">
          <div 
            className="loan-icon"
            style={{ backgroundColor: loanType.iconBgColor }}
          >
            {loanType.iconImage ? (
              <img 
                src={loanType.iconImage} 
                alt={`${loanType.type} icon`}
                className="loan-icon-image"
                onError={(e) => {
                  console.error(`Failed to load image: ${loanType.iconImage}`);
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'block';
                  }
                }}
              />
            ) : null}
            <span 
              className="icon-emoji" 
              style={{ display: loanType.iconImage ? 'none' : 'block' }}
            >
              {loanType.icon}
            </span>
          </div>
        </div>
        <div className="loan-info">
          <p className="loan-type-name">{loanType.type}</p>
          <h3 className="loan-amount">{loanType.amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeCard;