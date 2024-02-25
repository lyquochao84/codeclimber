
import React  from "react";
import styles from "./modal.module.css"

function Modal({isOpen, children, onClose }){
    if (!isOpen) {
        return null;
    }

    return(
        <div className={styles.backdrop}>
            <div className={styles.modalContent}>
                {children}
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>

    )
}

export default Modal;