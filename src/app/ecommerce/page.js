import React from 'react'
import ProductCard from '@/components/ecommerce/ProductCard'
const products = [
    {
        title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        img:"https://flowbite.com/docs/images/products/apple-watch.png",
        price:"599",
        currency:"$",
        rating:2
    }
]

const Ecommerce = () => {
  return (
    <div className='w-full p-5 grid grid-cols-3 gap-5'>
        {products.map((item,index)=> <ProductCard key={index} item={item}/>)}
    </div>
  )
}

export default Ecommerce