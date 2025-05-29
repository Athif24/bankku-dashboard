import React from 'react';
import { ACTIVE_LOANS } from '../../../data/staticData';
import './LoanTable.css';

const LoanTable = () => {
  const handleRepay = (loanNo) => {
    alert(`Initiating repayment for loan ${loanNo}`);
  };

  const calculateTotals = () => {
    const totalMoney = ACTIVE_LOANS.reduce((sum, loan) => {
      return sum + parseInt(loan.money.replace(/[$,]/g, ''));
    }, 0);
    
    const totalLeft = ACTIVE_LOANS.reduce((sum, loan) => {
      return sum + parseInt(loan.left.replace(/[$,]/g, ''));
    }, 0);
    
    const totalInstallment = ACTIVE_LOANS.reduce((sum, loan) => {
      const installmentValue = parseInt(loan.installment.split(' ')[0].replace(/[$,]/g, ''));
      return sum + installmentValue;
    }, 0);

    return {
      totalMoney: totalMoney.toLocaleString(),
      totalLeft: totalLeft.toLocaleString(),
      totalInstallment: totalInstallment.toLocaleString()
    };
  };

  const totals = calculateTotals();

  return (
    <div className="loan-table-section card">
      <h2 className="section-title">Active Loans Overview</h2>
      <div className="table-container">
        <table className="loans-table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Loan Money</th>
              <th>Left to repay</th>
              <th>Duration</th>
              <th>Interest rate</th>
              <th>Installment</th>
              <th>Repay</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVE_LOANS.map((loan, index) => (
              <tr key={index}>
                <td>{loan.no}</td>
                <td>{loan.money}</td>
                <td>{loan.left}</td>
                <td>{loan.duration}</td>
                <td>{loan.rate}</td>
                <td>{loan.installment}</td>
                <td>
                  <button 
                    className="repay-btn"
                    onClick={() => handleRepay(loan.no)}
                  >
                    Repay
                  </button>
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td className="total-label">Total</td>
              <td className="total-value">${totals.totalMoney}</td>
              <td className="total-value">${totals.totalLeft}</td>
              <td></td>
              <td></td>
              <td className="total-value">${totals.totalInstallment} / month</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;