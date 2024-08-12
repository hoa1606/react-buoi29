// src/components/Card.jsx

import React from 'react';

export default function Card({ hinhAnh, tenSP, gia, soLuong }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img className="w-full h-48 object-cover rounded-lg mb-4" src={hinhAnh} alt={tenSP} />
      <h3 className="text-lg font-bold mb-2">{tenSP}</h3>
      <p className="text-gray-700 mb-2">Price: ${gia}</p>
      <p className="text-gray-500">Available Quantity: {soLuong}</p>
    </div>
  );
}
