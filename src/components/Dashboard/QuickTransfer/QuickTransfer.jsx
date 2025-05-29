import React, { useState } from 'react';
import { ChevronRight, Send } from 'lucide-react';
import { QUICK_TRANSFER_CONTACTS } from '../../../data/staticData';
import './QuickTransfer.css';

const QuickTransfer = () => {
  const [amount, setAmount] = useState('525.50');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSend = () => {
    if (amount && selectedContact) {
      alert(`Sending $${amount} to ${selectedContact.name}`);
    } else {
      alert('Please select a contact and enter amount');
    }
  };

  return (
    <div className="quick-transfer-section card">
      <h2 className="section-title">Quick Transfer</h2>
      <div className="contacts-row">
        {QUICK_TRANSFER_CONTACTS.map((contact) => (
          <div 
            key={contact.id} 
            className={`contact-item ${selectedContact?.id === contact.id ? 'selected' : ''}`}
            onClick={() => setSelectedContact(contact)}
          >
            <div className="contact-avatar">
              <img src={contact.avatar} alt={contact.name} className="avatar-image" />
            </div>
            <p className="contact-name">{contact.name}</p>
            <p className="contact-role">{contact.role}</p>
          </div>
        ))}
        <button className="more-contacts-btn">
          <ChevronRight className="chevron-icon" />
        </button>
      </div>
      <div className="transfer-form">
        <div className="amount-input-container">
          <input
            type="text"
            placeholder="Write Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
        </div>
        <button className="send-btn btn-primary" onClick={handleSend}>
          <span>Send</span>
          <Send className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;