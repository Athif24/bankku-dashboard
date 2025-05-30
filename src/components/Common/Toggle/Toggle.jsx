import React from 'react';
import './Toggle.css';

const Toggle = ({ checked, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`modern-toggle ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        disabled={disabled}
        className="toggle-input"
      />
      <span className={`toggle-slider ${checked ? 'active' : ''}`}></span>
    </label>
  );
};

export default Toggle;