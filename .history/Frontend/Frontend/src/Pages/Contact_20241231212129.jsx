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
 <span className='bg-orange-950 text-orange-500 p-1'>SkillsEducation</span> we are always happy to hear from you! Whether you have questions about our courses, need support, or want to learn more about how we can help you achieve your educational goals, feel free to reach out. Our team is here to assist you every step of the way.</p>
  </div>
    </div>
  )
}
