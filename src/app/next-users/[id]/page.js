import CardDetails from '@/components/common/CardDetails'
import React from 'react'

const UserDetails = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await response.json();

  if (!response.ok) throw new Error(`Fetch failed for user with id: ${params.id}`);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <CardDetails data={data} />
    </div>
  );
};

export default UserDetails;
