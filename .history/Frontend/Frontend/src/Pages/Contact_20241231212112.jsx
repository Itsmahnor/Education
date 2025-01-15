import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'

export const Contact = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <div class="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col ">
 <h1 className='text-orange-950 font-bold'>Get in Touch with SkillsEducation</h1>
 <p className='w-[70vw]'>At 
 <span className='bg-orange-950 text-orange-500 p-1'>SkillsEducation</span> , we are committed to helping our students build successful careers. We offer a variety of job opportunities across different industries, connecting our graduates with top employers. Whether you're looking for an internship, part-time, or full-time position, we are here to assist you in finding a job that matches your skills and aspirations.</p>
  </div>
    </div>
  )
}
