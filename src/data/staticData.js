export const MENU_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'transactions', label: 'Transactions', icon: 'transactions' },
    { id: 'accounts', label: 'Accounts', icon: 'accounts' },
    { id: 'investments', label: 'Investments', icon: 'investments' },
    { id: 'credit-cards', label: 'Credit Cards', icon: 'credit-cards' },
    { id: 'loans', label: 'Loans', icon: 'loans' },
    { id: 'services', label: 'Services', icon: 'services' },
    { id: 'my-privileges', label: 'My Privileges', icon: 'my-privileges' },
    { id: 'settings', label: 'Setting', icon: 'settings' },
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
        icon: 'credit',
        iconBg: '#fff5d9'
    },
    {
        id: 2,
        name: 'Deposit Paypal',
        date: '25 January 2021',
        amount: 2500,
        icon: 'paypal',
        iconBg: '#e7edff'
    },
    {
        id: 3,
        name: 'Jemi Wilson',
        date: '21 January 2021',
        amount: 5400,
        icon: 'coin',
        iconBg: '#dcfaf8'
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
        avatar: '/assets/images/avatar-2.jpg'  // Fixed: removed extra quotes
    },
    {
        id: 2,
        name: 'Randy Press',
        role: 'Director',
        avatar: '/assets/images/avatar-3.jpg'  // Changed to local path for consistency
    },
    {
        id: 3,
        name: 'Workman',
        role: 'Designer',
        avatar: '/assets/images/avatar-4.jpg'  // Changed to local path for consistency
    }
];

export const LOAN_TYPES = [
    {
        id: 1,
        type: 'Personal Loans',
        amount: '$50,000',
        icon: '👤',
        iconImage: '/assets/images/personals-loan.png',
        bgColor: '#FFFFFF',
        iconBgColor: '#E7EDFF',
        textColor: '#1E293B'
    },
    {
        id: 2,
        type: 'Corporate Loans',
        amount: '$100,000',
        icon: '🏢',
        iconImage: '/assets/images/corporates-loan.png',
        bgColor: '#FFFFFF',
        iconBgColor: '#FFF5D9',
        textColor: '#1E293B'
    },
    {
        id: 3,
        type: 'Business Loans',
        amount: '$500,000',
        icon: '📊',
        iconImage: '/assets/images/business-loan.png',
        bgColor: '#FFFFFF',
        iconBgColor: '#FFE0EB',
        textColor: '#1E293B'
    },
    {
        id: 4,
        type: 'Custom Loans',
        amount: 'Choose Money',
        icon: '⚡',
        iconImage: '/assets/images/customs-loan.png',
        bgColor: '#FFFFFF',
        iconBgColor: '#DCFAF8',
        textColor: '#1E293B'
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
    avatar: '/assets/images/avatar-1.jpg'  
};