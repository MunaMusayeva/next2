import Link from 'next/link'
import React from 'react'

const CardDetails = ({ data }) => {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-indigo-600">{data.name}</h2>
      <p className="text-gray-500 mb-1">@{data.username}</p>
      <p className="text-sm text-gray-600 mb-3">{data.email}</p>

      <div className="mb-3">
        <h4 className="font-semibold text-gray-700">Address:</h4>
        <p className="text-gray-600 text-sm">
          {data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}
        </p>
      </div>

      <div className="mb-3">
        <h4 className="font-semibold text-gray-700">Company:</h4>
        <p className="text-gray-600 text-sm">{data.company.name}</p>
        <p className="text-gray-500 italic text-xs">{data.company.catchPhrase}</p>
      </div>

      <p className="text-gray-600 mb-1"><span className="font-semibold">Phone:</span> {data.phone}</p>
      <p className="text-gray-600 mb-4"><span className="font-semibold">Website:</span> {data.website}</p>
    </div>
  );
};

export default CardDetails;
