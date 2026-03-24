'use client';

import {useState} from 'react';
import {useCart} from '@/contexts/CartContext';

export default function CheckoutForm({
  setShippingCost,
}: {
  setShippingCost: (value: number) => void;
}) {
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>(
    'pickup',
  );
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [distance, setDistance] = useState<number | null>(null);

  const {items, getCartTotal} = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    instructions: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const calculateDelivery = () => {
    if (!formData.address || !formData.city) {
      alert('Please enter your address first');
      return;
    }

    // Fake logic (replace later with real API)
    const fakeDistance = Math.random() * 15 + 1; // 1–16 km

    const feePerKm = 300; // ₦300/km (adjust to your business)
    const baseFee = 1000;

    let totalFee = 0;
    if (items.length === 0) {
      totalFee = 0;
      // Add a toast to tell use to add product to cart if total fee wants to be seen
    } else {
      totalFee = Math.round(baseFee + fakeDistance * feePerKm);
    }

    setDistance(fakeDistance);
    setDeliveryFee(totalFee);
    setShippingCost(totalFee);
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
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="example@gmail.com"
              type="email"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-[#6d595c] mb-2 px-1">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full bg-[#e9e8e8] border-none rounded-xl py-4 px-6 focus:bg-[#ffffff] focus:ring-1 focus:ring-[#b40064]/20 transition-all outline-none"
              placeholder="+234xxxxxxxxxx"
              type="tel"
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
            Delivery Option
          </h2>
        </div>

        <div className="bg-[#f4f3f3] p-8 rounded-lg space-y-6">
          {/* Toggle */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setDeliveryOption('pickup')}
              className={`px-6 py-3 rounded-full text-sm font-bold ${
                deliveryOption === 'pickup'
                  ? 'bg-[#b40064] text-white'
                  : 'bg-white text-[#5a3f48]'
              }`}
            >
              Pickup
            </button>

            <button
              type="button"
              onClick={() => setDeliveryOption('delivery')}
              className={`px-6 py-3 rounded-full text-sm font-bold ${
                deliveryOption === 'delivery'
                  ? 'bg-[#b40064] text-white'
                  : 'bg-white text-[#5a3f48]'
              }`}
            >
              Delivery
            </button>
          </div>

          {/* Delivery Info */}
          {deliveryOption === 'delivery' && (
            <div className="space-y-4">
              {/* Warning */}
              <div className="bg-[#ffe4e7] text-[#3e001f] p-4 rounded-lg text-sm">
                ⚠️ Delivery cost is calculated based on the address provided
                above. Please ensure your address is accurate.
              </div>

              {/* Calculate Button */}
              <button
                type="button"
                onClick={calculateDelivery}
                className="w-full py-3 bg-[#b40064] text-white rounded-lg font-semibold"
              >
                Calculate Delivery Fee
              </button>

              {/* Result */}
              {distance && (
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <p className="text-sm text-[#5a3f48]">
                    Distance: <strong>{distance.toFixed(2)} km</strong>
                  </p>
                  <p className="text-sm text-[#5a3f48]">
                    Delivery Fee: <strong>₦{deliveryFee}</strong>
                  </p>
                </div>
              )}

              {/* Map */}
              {distance && (
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    loading="lazy"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      formData.address + ' ' + formData.city,
                    )}&output=embed`}
                  />
                </div>
              )}
            </div>
          )}
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
