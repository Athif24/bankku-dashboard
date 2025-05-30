// import React from 'react';
// import { MENU_ITEMS } from '../../../data/staticData';
// import './Sidebar.css';

// const Sidebar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {

//   const handleMenuItemClick = (itemId) => {
//     setCurrentPage(itemId);
//     // Auto close mobile menu when item is selected
//     if (window.innerWidth <= 768) {
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div className="mobile-overlay" onClick={closeMobileMenu}></div>
//       )}
      
//       {/* Sidebar */}
//       <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//         {/* Mobile Close Button */}
//         <button 
//           className="mobile-close-btn"
//           onClick={closeMobileMenu}
//           aria-label="Close mobile menu"
//         >
//           <img src="/assets/images/close-icon.png" alt="Close" className="close-icon" />
//         </button>

//         <div className="sidebar-header">
//           <div className="logo-container">
//             <div className="logo-icon">
//               <img 
//                 src="/assets/images/LogoBankku.png"  // Path relatif ke folder public
//                 alt="Bankku Logo"
//                 className="logo-image"
//               />
//             </div>
//             <span className="logo-text">Bankku.</span>
//           </div>
//         </div>
        
//         <nav className="sidebar-nav">
//           {MENU_ITEMS.map((item) => {
//             const isActive = currentPage === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => handleMenuItemClick(item.id)}
//                 className={`nav-item ${isActive ? 'active' : ''}`}
//               >
//                 {/* Ganti ikon dengan gambar */}
//                 <img 
//                   src={`/assets/images/${item.icon}-icon.png`}  // Path ke gambar untuk setiap ikon
//                   alt={item.label}
//                   className="nav-icon"
//                 />
//                 <span className="nav-label">{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React from 'react';
import { MENU_ITEMS } from '../../../data/staticData';
import './Sidebar.css';

const Sidebar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => {

  const handleMenuItemClick = (itemId) => {
    setCurrentPage(itemId);
    // Auto close mobile menu when item is selected
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              <img 
                src="/assets/images/LogoBankku.png"  // Path relatif ke folder public
                alt="Bankku Logo"
                className="logo-image"
              />
            </div>
            <span className="logo-text">Bankku.</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {MENU_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {/* Ganti ikon dengan gambar */}
                <img 
                  src={`/assets/images/${item.icon}-icon.png`}  // Path ke gambar untuk setiap ikon
                  alt={item.label}
                  className="nav-icon"
                />
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;