'use client';
import React, { useState } from 'react';
import Button from '@/components/molecules/Button';
import {MailWarningIcon } from 'lucide-react';

interface ConfirmModalProps {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  highlight?: string; 
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
}

const ConfirmationModal = ({ 
  title ="Confirm Action",
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  highlight,
  isOpen, 
  onClose, 
  onConfirm, 
}: ConfirmModalProps) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Darker overlay for danger actions */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />

      <div className="relative bg-white w-full max-w-md rounded-2xl px-15 py-10 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <MailWarningIcon/>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
          <p className="text-s text-gray-500 mt-2">
            {message}{" "} {highlight && <span className="font-semibold text-pink-600">{highlight}</span>}? 
            This action cannot be undone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button 
            variant="outline" 
            className="flex-1 order-1 sm:order-2" 
            onClick={handleConfirm}
            isLoading={loading}
          >
            {confirmText}
          </Button>
          <Button 
            variant="delete" 
            className="flex-1 order-2 sm:order-1" 
            onClick={onClose}
            disabled={loading}
            
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;