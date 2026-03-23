'use client';
import Button from '@/components/molecules/Button';
import React, { useEffect, useState } from 'react';


export interface Product {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  image: string;
  description?: string;
 
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
   isEditMode?: boolean
}

const AddEditProductModal = ({ isOpen, onClose, isEditMode }: ModalProps) => {
  const [loading, setLoading] = useState(false);



  const [formData, setFormData] = useState({
    name: '',
    image: '',
    priceMin: '',
    priceMax: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting:", formData);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all ease-in">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-xl rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isEditMode ? 'Edit Product' : 'Add New Product'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              placeholder="Product Name" 
              className="border p-3 rounded-lg outline-pink-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
            <input 
              placeholder="Image URL" 
              className="border p-3 rounded-lg outline-pink-500"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              required 
            />
            <input 
              placeholder="Min Price" 
              type="number"
              className="border p-3 rounded-lg outline-pink-500"
              value={formData.priceMin}
              onChange={(e) => setFormData({...formData, priceMin: e.target.value})}
              required 
            />
            <input 
              placeholder="Max Price" 
              type="number"
              className="border p-3 rounded-lg outline-pink-500"
              value={formData.priceMax}
              onChange={(e) => setFormData({...formData, priceMax: e.target.value})}
              required 
            />
          </div>
          <textarea
            placeholder="Description"
            rows={3}
            className="border p-3 rounded-lg w-full outline-pink-500"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button variant="solid" type="submit" isLoading={loading}>
              {isEditMode ? 'Save Changes' : 'Create Product'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditProductModal;