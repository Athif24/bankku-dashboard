import React from 'react';
import { RECENT_TRANSACTIONS } from '../../../data/staticData';
import { formatCurrency, formatDate } from '../../../utils/formatters';
import './RecentTransaction.css';

const RecentTransaction = () => {
  return (
    <div className="recent-transaction-section">
      <h2 className="section-title">Recent Transaction</h2>
      <div className="transactions-list">
        {RECENT_TRANSACTIONS.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-left">
              <div 
                className="transaction-icon"
                style={{ backgroundColor: transaction.iconBg }}
              >
                <span className="icon-emoji">{transaction.icon}</span>
              </div>
              <div className="transaction-details">
                <p className="transaction-name">{transaction.name}</p>
                <p className="transaction-date">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <div className="transaction-amount">
              <span 
                className={`amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}
              >
                {transaction.amount > 0 ? '+' : ''}{formatCurrency(Math.abs(transaction.amount))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;