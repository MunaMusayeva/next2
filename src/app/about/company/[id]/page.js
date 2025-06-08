import React from 'react'

const CompanyDetails = async ({params}) => {
  const p = await params

  return (
    <div className='h-screen w-full flex justify-center items-center'>Company ID is: {p.id}</div>
  )
}

export default CompanyDetails