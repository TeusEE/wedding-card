// filepath: /c:/Users/xodn1/Desktop/my-app/src/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children}) => {
  if (!(isOpen.isopen)) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;