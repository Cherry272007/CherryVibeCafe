// Modal.jsx
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const escHandler = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('keydown', escHandler);
    return () => {
      document.removeEventListener('keydown', escHandler);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      
      <div className="bg-[#808080b6] flex items-center justify-center rounded p-4 h-full w-full">
        <div
          className="bg-white rounded max-w-md p-4 w-full"
          
        >
          <button
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
            className="float-right"
            aria-label="Close"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
