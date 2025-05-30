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
      {/* First Row: My Cards (left) + Recent Transaction (right) */}
      <div className="dashboard-row row-1">
        <div className="dashboard-main">
          <CreditCard />
        </div>
        <div className="dashboard-sidebar">
          <RecentTransaction />
        </div>
      </div>
      
      {/* Second Row: Weekly Activity (left) + Expense Statistics (right) */}
      <div className="dashboard-row row-2">
        <div className="dashboard-left">
          <WeeklyActivity />
        </div>
        <div className="dashboard-right">
          <ExpenseChart />
        </div>
      </div>
      
      {/* Third Row: Quick Transfer (left) + Balance History (right) */}
      <div className="dashboard-row row-3">
        <div className="dashboard-left">
          <QuickTransfer />
        </div>
        <div className="dashboard-right">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;