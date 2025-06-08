import Link from 'next/link'
import React from 'react'

const Card = ({data}) => {
  return (
   <Link href={`/next-users/${data.id}`}> 
    <div className='p-5 border-[1px] border-zinc-300'>
        <h3>{data.name}</h3>
        <p className='mt-3'>{data.email}</p>
    </div>
   </Link>
  )
}

export default Card