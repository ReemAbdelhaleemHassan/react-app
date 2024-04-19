// Header.tsx
import React from 'react';
import logoImage from './crisman-logo-2-146x224.png';
import adminImage from './admin.png';
import styles from '../styles/styles.module.css'; // Import CSS Modules styles

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Crisman Logo" className={styles.logo} />
      </div>
      <div className={styles.welcomeMessage}>Welcome Admin <img src={adminImage} alt="Admin Image" className={styles.logo} /></div>
    </div>
  );
};

export default Header;
