import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './MainLayout.css';

const MainLayout = ({ children, currentPage, setCurrentPage, pageTitle }) => {
  return (
    <div className="main-layout">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-content">
        <Header pageTitle={pageTitle} />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;