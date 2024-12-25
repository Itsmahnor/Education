import React from 'react'
import { FaBookOpen } from "react-icons/fa";
export const Hero = () => {
  return (
    <div className='w-[100vw] lg:h-[80vh]   bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]'>
<div className='w-[80vw] flex justify-around bottom  flex-wrap  lg:h-[70vh] gap-3 '>
{/* Left div for content */}
<div className='lg:flex-1 flex flex-col justify-center  px-3'>
  <div className='flex gap-2  items-center'> 
  <FaBookOpen   />
  <span className=''>100% TEACH ONLINE</span>
  </div>

<h1 className='md:text-[4rem] font-bold'>Online Platform Education</h1>
<p>Join SkillsEducation And Learn From Top Instructors Around The World. Live, Interactive, And Flexible Online Learning At Your Fingertips.</p>
<div className='p-3 justify-start'>
<ul className="relative flex justify-start">
  <li className="relative z-[1]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/html.png" alt="pic1" className="w-[50px]" /></li>
  <li className="relative z-[2] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/python.png" alt="pic2" className="w-[50px]" /></li>
  <li className="relative z-[3] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/express.png" alt="pic3" className="w-[50px]" /></li>
  <li className="relative z-[4] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/laravel.png" alt="pic4" className="w-[50px]" /></li>
  <li className="relative z-[5] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/django.png" alt="pic5" className="w-[50px]" /></li>
  <li className="relative z-[5] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/php.png" alt="pic5" className="w-[50px]" /></li>
  <li className="relative z-[5] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/Machine_Learning.png" alt="pic5" className="w-[50px]" /></li>
  <li className="relative z-[5] -ml-[15px]"><img src="https://skillseducation.pk/assets/skillsimages/nav-icons/java.png" alt="pic5" className="w-[50px]" /></li>
  <li className="relative z-[5] -ml-[15px]"><img src="	https://skillseducation.pk/assets/skillsimages/nav-icons/wordpress.png" alt="pic5" className="w-[50px]" /></li>
</ul>

</div>
</div >
<div className='lg:flex-1 h-full' >
<img src="https://skillseducation.pk/assets/img/about/about-5-1.png" alt="hero" className='h-full' />
</div>
</div>
    </div>
  )
}
