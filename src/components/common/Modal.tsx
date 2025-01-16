import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-md' }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] overflow-hidden" 
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 overflow-hidden">
        <div 
          className={`bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full ${maxWidth} max-h-[90vh] overflow-hidden flex flex-col shadow-xl shadow-violet-500/10`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6 flex-shrink-0">
            {typeof title === 'string' ? (
              <h3 className="text-2xl font-bold gradient-text">{title}</h3>
            ) : (
              title
            )}
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 pr-2 -mr-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}