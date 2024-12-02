// import React, { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div style={styles.header}>
//       <h1 style={styles.title}>My Notes</h1>
//       <div
//         style={styles.dropdownContainer}
//         onMouseEnter={toggleMenu}
//         onMouseLeave={toggleMenu}
//       >
//         <div style={styles.hamburgerContainer}>
//           <div style={styles.hamburger}></div>
//           <div style={styles.hamburger}></div>
//           <div style={styles.hamburger}></div>
//         </div>
//         {isMenuOpen && (
//           <div style={styles.dropdownMenu}>
//             <button style={styles.menuItem}>Home</button>
//             <button style={styles.menuItem}>Profile</button>
//             <button style={styles.menuItem}>Logout</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//     position: 'relative',
//     borderBottom: '2px solid #4CAFEE',
//     padding: '15px 40px',
//     position: 'sticky',
//     top: '0',
//     backgroundColor: '#fff',
//     zIndex: '1000',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     fontSize: '36px',
//     color: '#4CAFEE',
//     fontWeight: 'bold',
//     margin: '0',
//   },
//   dropdownContainer: {
//     position: 'relative',
//     cursor: 'pointer',
//     zIndex: 1000,
//   },
//   hamburgerContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '5px',
//   },
//   hamburger: {
//     width: '30px',
//     height: '4px',
//     backgroundColor: '#4CAFEE',
//     borderRadius: '4px',
//     transition: 'all 0.3s ease-in-out',
//   },
//   dropdownMenu: {
//     position: 'absolute',
//     top: '40px',
//     right: '0',
//     backgroundColor: '#fff',
//     border: '1px solid #ddd',
//     borderRadius: '12px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     zIndex: 10,
//     display: 'flex',
//     flexDirection: 'column',
//     minWidth: '150px',
//     overflow: 'hidden',
//   },
//   menuItem: {
//     padding: '10px 15px',
//     fontSize: '16px',
//     color: '#333',
//     textAlign: 'left',
//     border: 'none',
//     backgroundColor: 'transparent',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   menuItemHover: {
//     backgroundColor: '#f0f0f0', // Subtle hover effect
//   },
// };

// export default Header;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Perform any logout actions like clearing user state
    navigate('/auth'); // Redirect to the login/register page
  };

  return (
    <div style={styles.header}>
      <h1 style={styles.title}>My Notes</h1>
      <div
        style={styles.dropdownContainer}
        onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}
      >
        <div style={styles.hamburgerContainer}>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
        </div>
        {isMenuOpen && (
          <div style={styles.dropdownMenu}>
            <button style={styles.menuItem}>Home</button>
            <button style={styles.menuItem}>Profile</button>
            <button style={styles.menuItem} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
    borderBottom: '2px solid #4CAFEE',
    padding: '15px 40px',
    position: 'sticky',
    top: '0',
    backgroundColor: '#fff',
    zIndex: '1000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '36px',
    color: '#4CAFEE',
    fontWeight: 'bold',
    margin: '0',
  },
  dropdownContainer: {
    position: 'relative',
    cursor: 'pointer',
    zIndex: 1000,
  },
  hamburgerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  hamburger: {
    width: '30px',
    height: '4px',
    backgroundColor: '#4CAFEE',
    borderRadius: '4px',
    transition: 'all 0.3s ease-in-out',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '40px',
    right: '0',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    overflow: 'hidden',
  },
  menuItem: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#333',
    textAlign: 'left',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  menuItemHover: {
    backgroundColor: '#f0f0f0', // Subtle hover effect
  },
};

export default Header;
