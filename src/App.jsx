import React, { useState } from 'react';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Loans from './pages/Loans/Loans';
import Settings from './pages/Settings/Settings';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeSettingsTab, setActiveSettingsTab] = useState('security');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'loans':
        return <Loans />;
      case 'settings':
        return <Settings activeTab={activeSettingsTab} setActiveTab={setActiveSettingsTab} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      pageTitle={currentPage === 'dashboard' ? 'Overview' : currentPage === 'loans' ? 'Loans' : 'Setting'}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default App;