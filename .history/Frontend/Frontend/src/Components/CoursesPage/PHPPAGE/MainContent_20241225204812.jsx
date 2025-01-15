import React from 'react'
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
export const MainContent = () => {
  return (
    <div className='w-[100vw]  flex justify-center items-center pt-16 bg-orange-950 text-orange-500'>
      <div className='w-[80vw] flex gap-7 justify-between flex-wrap'>
        <div>
        <p>Full Stack Development</p>
        
        <h1 className='font-bold'>Master Full Stack PHP Laravel Development</h1>
        <div className='flex gap-3'>
        <div className='flex gap-2 mt-1'>
          <IoStar />  <IoStar />  <IoStar />  <IoStar />  <IoStar />
        </div>
        (5.0)
        </div>
        </div>
       <div className='w-[25vw] bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold text-[1.1rem]'>
        <div className='p-3 '>
        <div className='w-[18vw] pt-5  flex justify-between '>
          <div className='flex gap-1'>
            <GiDuration className='mt-1' />
            <p>Duration:</p>
          </div>
  <p>	6 Month</p>
</div>

        </div>

       </div>

      </div>
      </div>
  )
}
