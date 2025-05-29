import React from 'react';
import './Toggle.css';

const Toggle = ({ checked, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      className={`toggle-switch ${checked ? 'active' : 'inactive'}`}
      onClick={handleToggle}
      disabled={disabled}
      aria-pressed={checked}
    >
      <span className="toggle-thumb" />
    </button>
  );
};

export default Toggle;