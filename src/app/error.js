"use client"


const Error = ({
    error,
}) => {
  return (
    <div className='h-screen w-full flex items-center justify-center text-red-500 text-2xl'>{error.message}</div>
  )
}

export default Error