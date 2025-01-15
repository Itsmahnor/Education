import React from 'react'
import Course from './Search.json'
import { IoMdTime } from "react-icons/io";
export const SearchProgram = () => {
  return (
    <div className="w-[100vw] h-auto md:pt-5 bg-orange-950 flex justify-center text-orange-500 ">
      <div className="w-[80vw] h-auto flex justify-around flex-wrap gap-10">
      
        <div className="lg:w-[70vw] w-[90vw]">
          
            <CategoryGrid />
  
        </div>
      </div>
    </div>
  )
}
// Grid Component for larger screens
const CategoryGrid = () => (
  <div className="grid grid-cols-3 gap-0 ">
    { Course.map((item, index) => (
      <div key={index} className='w-[420px] h-auto bg-orange-500 rounded-3xl
        '>
          <div className='m-4 '>
          <img src={item.img} alt="" className='w-[380px] h-[350px] object-cover rounded-2xl '  />
          <div className='flex justify-between'>
          <div className='flex gap-1'>
          <div className='flex  mt-3 '>    <span className='text-yellow-500 text-[1.5rem]  '><IoMdStar /></span>
          <span className='text-yellow-500 text-[1.5rem]  '><IoMdStar /></span>   <span className='text-yellow-500 text-[1.5rem] '><IoMdStar /></span></div>
<span className='text-black mt-3
'>(5.0)</span>
          </div>
          <span className='text-black font-bold mt-3 text-[1.2rem]'>{item.rupees} /-</span>
          </div>
   <h1 className='text-black text-[1.3rem] font-bold mt-4'>{item.title}</h1>
          </div>
<div className='m-4 flex justify-between flex-wrap  '>
<div className='flex gap-1 text-black'><span><FaRegUserCircle className='mt-1' /></span> <span className=''>By: Umair Farooqi</span></div>
<div className='flex gap-1 text-black '><span><IoMdTime className='mt-1' /></span> <span className=''> {item.duration}:Month</span></div>
<div className='flex gap-1 text-black '><span><FaRegUserCircle className='mt-1' /></span> <span className=''>Duration</span></div>

</div>

      </div>
    ))}
  </div>
); 