export const MENU_ITEMS = [
  { id: 'dashboard', icon: 'Home', label: 'Dashboard' },
  { id: 'transactions', icon: 'ArrowUpDown', label: 'Transactions' },
  { id: 'accounts', icon: 'Users', label: 'Accounts' },
  { id: 'investments', icon: 'TrendingUp', label: 'Investments' },
  { id: 'credit-cards', icon: 'CreditCard', label: 'Credit Cards' },
  { id: 'loans', icon: 'DollarSign', label: 'Loans' },
  { id: 'services', icon: 'Wrench', label: 'Services' },
  { id: 'privileges', icon: 'Gift', label: 'My Privileges' },
  { id: 'settings', icon: 'Settings', label: 'Setting' }
];

export const CREDIT_CARDS = [
  {
    id: 1,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    type: 'primary',
    bgColor: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)'
  },
  {
    id: 2,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    type: 'secondary',
    bgColor: '#ffffff'
  }
];

export const RECENT_TRANSACTIONS = [
  {
    id: 1,
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    icon: '💳',
    iconBg: '#fed7aa'
  },
  {
    id: 2,
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: '💰',
    iconBg: '#bbf7d0'
  },
  {
    id: 3,
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: '💸',
    iconBg: '#fde68a'
  }
];

export const WEEKLY_ACTIVITY_DATA = [
  { day: 'Sat', deposit: 250, withdraw: 100 },
  { day: 'Sun', deposit: 350, withdraw: 120 },
  { day: 'Mon', deposit: 300, withdraw: 250 },
  { day: 'Tue', deposit: 380, withdraw: 500 },
  { day: 'Wed', deposit: 150, withdraw: 250 },
  { day: 'Thu', deposit: 400, withdraw: 230 },
  { day: 'Fri', deposit: 380, withdraw: 350 }
];

export const EXPENSE_STATISTICS = [
  { category: 'Entertainment', percentage: 30, color: '#4338ca' },
  { category: 'Bill Expense', percentage: 15, color: '#f97316' },
  { category: 'Investment', percentage: 20, color: '#ec4899' },
  { category: 'Others', percentage: 35, color: '#3b82f6' }
];

export const QUICK_TRANSFER_CONTACTS = [
  { 
    id: 1, 
    name: 'Livia Bator', 
    role: 'CEO', 
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fc?w=100&h=100&fit=crop&crop=face'
  },
  { 
    id: 2, 
    name: 'Randy Press', 
    role: 'Director', 
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  { 
    id: 3, 
    name: 'Workman', 
    role: 'Designer', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
];

export const LOAN_TYPES = [
  { 
    id: 1,
    type: 'Personal Loans', 
    amount: '$50,000', 
    icon: '👤', 
    bgColor: '#dbeafe',
    textColor: '#1e40af'
  },
  { 
    id: 2,
    type: 'Corporate Loans', 
    amount: '$100,000', 
    icon: '💼', 
    bgColor: '#fed7aa',
    textColor: '#ea580c'
  },
  { 
    id: 3,
    type: 'Business Loans', 
    amount: '$500,000', 
    icon: '📈', 
    bgColor: '#fce7f3',
    textColor: '#be185d'
  },
  { 
    id: 4,
    type: 'Custom Loans', 
    amount: 'Choose Money', 
    icon: '⚙️', 
    bgColor: '#cffafe',
    textColor: '#0891b2'
  }
];

export const ACTIVE_LOANS = [
  { 
    no: '01.', 
    money: '$100,000', 
    left: '$40,500', 
    duration: '8 Months', 
    rate: '12%', 
    installment: '$2,000 / month' 
  },
  { 
    no: '02.', 
    money: '$500,000', 
    left: '$250,000', 
    duration: '36 Months', 
    rate: '10%', 
    installment: '$8,000 / month' 
  },
  { 
    no: '03.', 
    money: '$900,000', 
    left: '$40,500', 
    duration: '12 Months', 
    rate: '12%', 
    installment: '$5,000 / month' 
  },
  { 
    no: '04.', 
    money: '$50,000', 
    left: '$40,500', 
    duration: '25 Months', 
    rate: '5%', 
    installment: '$2,000 / month' 
  },
  { 
    no: '05.', 
    money: '$50,000', 
    left: '$40,500', 
    duration: '5 Months', 
    rate: '16%', 
    installment: '$10,000 / month' 
  },
  { 
    no: '06.', 
    money: '$80,000', 
    left: '$25,500', 
    duration: '14 Months', 
    rate: '8%', 
    installment: '$2,000 / month' 
  },
  { 
    no: '07.', 
    money: '$12,000', 
    left: '$5,500', 
    duration: '9 Months', 
    rate: '13%', 
    installment: '$500 / month' 
  },
  { 
    no: '08.', 
    money: '$160,000', 
    left: '$100,800', 
    duration: '3 Months', 
    rate: '12%', 
    installment: '$900 / month' 
  }
];

export const SETTINGS_TABS = [
  { id: 'profile', label: 'Edit Profile' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'security', label: 'Security' }
];

export const USER_PROFILE = {
  name: 'Charlene Reed',
  username: 'Charlene Reed',
  email: 'charlenereed@gmail.com',
  dateOfBirth: '25 January 1990',
  presentAddress: 'San Jose, California, USA',
  permanentAddress: 'San Jose, California, USA',
  city: 'San Jose',
  postalCode: '45962',
  country: 'USA',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1fc?w=400&h=400&fit=crop&crop=face'
};