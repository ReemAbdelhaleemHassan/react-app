// Layout.tsx - Pass activeItem state to determine content
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import EmployeeList from "./EmployeeList";
import styles from "../styles/styles.module.css";
import sidebarIcon from "./sidebar-svgrepo-com.svg";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${styles.layout} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
      <Header />

      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        <img
          src={sidebarIcon}
          alt="Sidebar Icon"
          className={styles.sidebarIcon}
        />
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      
      <div className={styles.contentWrapper}>
        {isSidebarOpen && (
          <div className={styles.sidebar}>
            <Sidebar setActiveItem={setActiveItem} activeItem={activeItem} />
          </div>
        )}
        {activeItem === "personal_information" && <EmployeeList />}
        <div
          className={`${styles.content} ${
            isSidebarOpen ? '' : styles.contentExpanded
          }`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;