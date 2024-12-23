import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
export const AboutMe = () => {
  return (
    <div className="w-[100vw] h-auto pt-20 bg-orange-950 flex justify-center text-orange-500  text-[1.2rem] ">
    <div className="w-100 lg:mx-28 mx-13  h-auto flex flex-wrap  ">
    <div className="md:w-[50%] md:h-[70%] flex gap-7  flex-wrap justify-center items-center ">
<div className="w-100 h-100 p-2 relative overflow-hidden text-center  ">
<img 
  src="https://skillseducation.pk/assets/skillsimages/nav-icons/meeeeee.png" 
  alt="image" 
  className="h-full w-full lg:object-contain filter brightness-75 transition duration-300 hover:brightness-50" 
/>
<p className="absolute -bottom-3 flex justify-center items-center bg-orange-500 px-3  rounded-lg text-white md:font-bold">
   7 years of experience in teaching
  </p>
  <p className="absolute top-0 flex justify-center items-center bg-orange-500 px-3  rounded-lg text-white md:font-bold">
   Umair Farooqi
  </p>
</div>
</div>
<div className="md:w-[50%]  p-5 h-auto flex justify-start   flex-col ">
<h3 className="text-[20px] font-bold">About me</h3>
<h1 className='md:w-[30vw] md:text-[3rem] font-bold'>Educated Over 30,000+ Students In Pakistan</h1>

<p className="mt-2">Over 30,000 Students Have Learned Under My Guidance, Many Of Whom Are Now Successfully Employed In Various Jobs Across Pakistan. I Have Also Completed 300+ Projects And Worked Alongside Industry Experts In The Field.
</p>
<div className="mt-2 flex gap-2
 items-center">
  <div className="bg-orange-500 rounded-full  flex items-center justify-center">
    <BsArrowRightCircle className="text-orange-950" />
  </div>
  <p className='mt-3'>Helping students build their careers</p>
</div>
<div className=" flex gap-2
 items-center">
  <div className="bg-orange-500 rounded-full  flex items-center justify-center">
    <BsArrowRightCircle className="text-orange-950" />
  </div>
  <p className='mt-3'>Over 300+ successful projects</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-orange-500 rounded-full  flex items-center justify-center">
    <BsArrowRightCircle className="text-orange-950" />
  </div>
  <p className="mt-3">Industry collaboration with experts</p>
</div>
<div className="flex gap-4 items-center mt-3">
  <div className="bg-orange-500 rounded-full p-3  flex items-center justify-center">
    <IoIosArrowDropright className="text-orange-950" />
  </div>
  <p className="mt-3">Get more Info</p>
</div>
</div>

    </div>
  </div>
  )
}
