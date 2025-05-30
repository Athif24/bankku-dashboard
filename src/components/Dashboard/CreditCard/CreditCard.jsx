import React from 'react';
import { CREDIT_CARDS } from '../../../data/staticData';
import { formatCurrency } from '../../../utils/formatters';
import './CreditCard.css';

const CreditCard = () => {
  return (
    <div className="credit-card-section">
      <div className="section-header">
        <h2 className="section-title">My Cards</h2>
        <button className="see-all-btn">See All</button>
      </div>
      <div className="cards-grid">
        {CREDIT_CARDS.map((card) => (
          <div
            key={card.id}
            className={`credit-card ${card.type}`}
            style={{
              background: card.type === 'primary' ? card.bgColor : card.bgColor
            }}
          >
            <div className="card-top">
              <div className="card-balance">
                <p className="balance-label">Balance</p>
                <p className="balance-amount">{formatCurrency(card.balance)}</p>
              </div>
              <div className="card-chip">
                {/* Ganti ikon chip dengan gambar */}
                <img
                  src={`/assets/images/${card.type === 'primary' ? 'chip-card-white' : 'chip-card-black'}.png`} 
                  alt="Card Chip"
                  className="chip-icon"
                />
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <div className="card-holder">
                  <p className="info-label">CARD HOLDER</p>
                  <p className="info-value">{card.cardHolder}</p>
                </div>
                <div className="card-expiry">
                  <p className="info-label">VALID THRU</p>
                  <p className="info-value">{card.validThru}</p>
                </div>
              </div>
              <div className="card-number-row">
                <p className="card-number">{card.cardNumber}</p>
                <div className="card-logo">
                  <div className="logo-circle"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCard;