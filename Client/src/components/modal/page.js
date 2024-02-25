import React from "react";
import styles from "./modal.module.css";

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
