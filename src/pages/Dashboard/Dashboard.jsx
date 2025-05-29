import React from 'react';
import CreditCard from '../../components/Dashboard/CreditCard/CreditCard';
import RecentTransaction from '../../components/Dashboard/RecentTransaction/RecentTransaction';
import WeeklyActivity from '../../components/Dashboard/WeeklyActivity/WeeklyActivity';
import ExpenseChart from '../../components/Dashboard/ExpenseChart/ExpenseChart';
import QuickTransfer from '../../components/Dashboard/QuickTransfer/QuickTransfer';
import BalanceHistory from '../../components/Dashboard/BalanceHistory/BalanceHistory';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <div className="dashboard-main">
          <CreditCard />
        </div>
        <div className="dashboard-sidebar">
          <RecentTransaction />
        </div>
      </div>
      
      <div className="dashboard-row">
        <WeeklyActivity />
        <ExpenseChart />
      </div>
      
      <div className="dashboard-row">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  );
};

export default Dashboard;