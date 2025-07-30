import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50" >
    <div className="bg-[#808080b6] rounded p-4 w-[800px] relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-7 right-7 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
