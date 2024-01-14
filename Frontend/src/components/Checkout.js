// src/components/Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const history = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    
    console.log('Processing payment...');
    
    history.push('/order-confirmation');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            placeholder="123 Main St"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            placeholder="Anytown"
            value={shippingInfo.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
            ZIP Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zipCode"
            type="text"
            name="zipCode"
            placeholder="12345"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="text-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePayment}
          >
            Process Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
