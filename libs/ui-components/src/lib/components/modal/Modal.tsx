import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[var(--background)] p-6 rounded-md shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-[var(--primary)] text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
