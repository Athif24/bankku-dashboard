import React from 'react';
import LoanTypeCard from '../../components/Loans/LoanTypeCard/LoanTypeCard';
import LoanTable from '../../components/Loans/LoanTable/LoanTable';
import { LOAN_TYPES } from '../../data/staticData';
import './Loans.css';

const Loans = () => {
  const handleLoanTypeClick = (loanType) => {
    alert(`You selected: ${loanType.type}`);
  };

  return (
    <div className="loans-page">
      <div className="loan-types-section">
        <div className="loan-types-grid">
          {LOAN_TYPES.map((loanType) => (
            <LoanTypeCard
              key={loanType.id}
              loanType={loanType}
              onClick={handleLoanTypeClick}
            />
          ))}
        </div>
      </div>
      
      <div className="loans-table-section">
        <LoanTable />
      </div>
    </div>
  );
};

export default Loans;