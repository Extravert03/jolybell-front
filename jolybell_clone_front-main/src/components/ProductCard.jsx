import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='p-4 w-96 flex flex-col group cursor-pointer'>
      <div className='relative text-center flex justify-center items-center drop-shadow-sm filter bg-white rounded-3xl'>
        <div className="absolute invisible group-hover:visible transition duration-300 ease-in-out rounded-3xl group-hover:bg-white px-16 py-3  hover:opacity-70">
          <span>READ MORE</span>
        </div>
        <div className='p-2 top-0 left-0 font-semibold bg-black text-white rounded-tl-3xl rounded-br-3xl w-1/3 absolute'>{props.price} USD</div>
        <img className='px-12 pt-16 py-8 group-hover:bg-gray-500 rounded-3xl transition duration-300 ease-in-out' src={props.photoUrl} alt={props.name} />
      </div>
      <button className='drop-shadow-sm filter bg-white mt-4 p-4 rounded-full transition duration-300 ease-in-out group-hover:bg-black group-hover:text-white'>{props.name}</button>
    </div>
  )
}
