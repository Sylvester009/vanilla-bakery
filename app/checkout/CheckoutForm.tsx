'use client';

import {useState} from 'react';
import {useCart} from '@/contexts/CartContext';

export default function CheckoutForm() {
  const {items, getCartTotal} = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    instructions: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    console.log('Cart items:', items);
    console.log('Total:', getCartTotal());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Step 1: Shipping */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-[#b40064] text-[#ffffff] flex items-center justify-center font-bold text-sm">
            1
          </span>
          <h2 className="font-serif text-2xl text-[#1a1c1c]">
            Shipping Information
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              First Name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="Amélie"
              type="text"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Last Name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="Poulain"
              type="text"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Shipping Address
            </label>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="15 Rue Lepic"
              type="text"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              City
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="Paris"
              type="text"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Postal Code
            </label>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="75018"
              type="text"
              required
            />
          </div>
        </div>
      </section>

      <div className="h-px bg-[#e2bdc7]/20"></div>

      {/* Step 2: Payment */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-[#f7dcdf] text-[#735f62] flex items-center justify-center font-bold text-sm">
            2
          </span>
          <h2 className="font-serif text-2xl text-[#1a1c1c]">
            Payment Details
          </h2>
        </div>
        <div className="bg-[#f4f3f3] p-8 rounded-lg space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Card Number
            </label>
            <div className="relative">
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full bg-[#ffffff] border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
                placeholder="0000 0000 0000 0000"
                type="text"
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#5a3f48]/40">
                credit_card
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
                Expiry Date
              </label>
              <input
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full bg-[#ffffff] border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
                placeholder="MM/YY"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
                CVV
              </label>
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full bg-[#ffffff] border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
                placeholder="***"
                type="password"
                required
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Instructions */}
      <section>
        <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
          Special Instructions (Optional)
        </label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
          className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none h-32"
          placeholder="Tell us if you need a gift note or have delivery preferences..."
        />
      </section>
    </form>
  );
}
