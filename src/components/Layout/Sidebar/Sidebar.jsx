import React from 'react';
import { 
  Home, 
  ArrowUpDown, 
  Users, 
  TrendingUp, 
  CreditCard, 
  DollarSign,
  Settings,
  Gift,
  Wrench
} from 'lucide-react';
import { MENU_ITEMS } from '../../../data/staticData';
import './Sidebar.css';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const getIcon = (iconName) => {
    const icons = {
      Home,
      ArrowUpDown,
      Users,
      TrendingUp,
      CreditCard,
      DollarSign,
      Wrench,
      Gift,
      Settings
    };
    return icons[iconName];
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <CreditCard className="icon" />
          </div>
          <span className="logo-text">Bankku.</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {MENU_ITEMS.map((item) => {
          const Icon = getIcon(item.icon);
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;