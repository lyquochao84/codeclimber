import React from "react";
import styles from "./sidebar.module.css";
export default function AccountSetting({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const hanldSidebarClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.sidebar} onClick={hanldSidebarClick}>
        <p>Account Setting</p>
        <p>Sign Out</p>
        <p>FAQ</p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}
