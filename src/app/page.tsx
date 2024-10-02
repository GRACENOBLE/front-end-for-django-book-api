import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full bg-gray-300 flex flex-col items-center'>
      <h1 className='font-semibold text-4xl text-center'>Book Website</h1>
      <form action="" className='flex gap-10'>
        <input type="text" placeholder='Book title'/>
        <input type="number" placeholder='Release date'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default page
