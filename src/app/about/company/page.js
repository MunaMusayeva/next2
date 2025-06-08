import React from 'react'
import Link from 'next/link'

const Company = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
       <Link className='bg-slate-500 text-white rounded-full px-5 py-2' href="/about/company/10">Go to company 10</Link>
    </div>
  )
}

export default Company