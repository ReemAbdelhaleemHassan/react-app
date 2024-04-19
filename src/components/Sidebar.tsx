// Sidebar.tsx
import React, { useState } from "react";
import styles from "../styles/styles.module.css";

interface SidebarProps {
  setActiveItem: (item: string | null) => void;
  activeItem: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveItem, activeItem }) => {
  const handleItemClick = (item: string) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        <li
          className={activeItem === "home" ? styles.activeItem : ""}
          onClick={() => handleItemClick("home")}
        >
          Home
        </li>
        <li
          className={activeItem === "admin" ? styles.activeItem : ""}
          onClick={() => handleItemClick("admin")}
        >
          Admin Page
        </li>
        <li
          className={
            activeItem === "personal_information" ? styles.activeItem : ""
          }
          onClick={() => handleItemClick("personal_information")}
        >
          Personal Information
        </li>
        <li
          className={activeItem === "attendance" ? styles.activeItem : ""}
          onClick={() => handleItemClick("attendance")}
        >
          Attendance
        </li>
        <li
          className={activeItem === "vacation" ? styles.activeItem : ""}
          onClick={() => handleItemClick("vacation")}
        >
          Vacation
        </li>
        <li
          className={activeItem === "payroll" ? styles.activeItem : ""}
          onClick={() => handleItemClick("payroll")}
        >
          Payroll
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
