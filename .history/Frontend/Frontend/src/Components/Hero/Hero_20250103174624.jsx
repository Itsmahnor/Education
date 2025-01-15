import React from 'react';
import { FaBookOpen } from "react-icons/fa";

export const Hero = () => {
  return (
    // Main container: Full width, responsive height, orange-based color scheme
    <div className='w-[100vw] lg:h-[80vh] bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]'>
      <div className='w-[80vw] flex justify-around bottom flex-wrap lg:h-[70vh] gap-3'>
        
        {/* Left section for text content */}
        <div className='lg:flex-1 flex flex-col justify-center px-3'>
          {/* Icon and headline */}
          <div className='flex gap-2 items-center'> 
            <FaBookOpen />
            <span>100% TEACH ONLINE</span>
          </div>

          {/* Main heading */}
          <h1 className='md:text-[4rem] font-bold'>Online Platform Education</h1>

          {/* Subtext paragraph */}
          <p>
            Join SkillsEducation And Learn From Top Instructors Around The World. 
            Live, Interactive, And Flexible Online Learning At Your Fingertips.
          </p>

          {/* List of technology icons */}
          <div className='p-3 justify-start'>
            <ul className="relative flex justify-start">
              <li className="relative z-[1]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/html.png" alt="HTML" className="w-[50px]" />
              </li>
              <li className="relative z-[2] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/python.png" alt="Python" className="w-[50px]" />
              </li>
              <li className="relative z-[3] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/express.png" alt="Express" className="w-[50px]" />
              </li>
              <li className="relative z-[4] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/laravel.png" alt="Laravel" className="w-[50px]" />
              </li>
              <li className="relative z-[5] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/django.png" alt="Django" className="w-[50px]" />
              </li>
              <li className="relative z-[5] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/php.png" alt="PHP" className="w-[50px]" />
              </li>
              <li className="relative z-[5] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/Machine_Learning.png" alt="Machine Learning" className="w-[50px]" />
              </li>
              <li className="relative z-[5] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/java.png" alt="Java" className="w-[50px]" />
              </li>
              <li className="relative z-[5] -ml-[15px]">
                <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/wordpress.png" alt="WordPress" className="w-[50px]" />
              </li>
            </ul>
          </div>
        </div>

        {/* Right section for hero image */}
        <div className='lg:flex-1 h-full'>
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQE1-zKO6IhzrQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516518636756?e=2147483647&v=beta&t=RMACZV4WQuYCQ2iX0NauFP_-7-tpSlUAkuGSVsTNRvo"
            alt="hero"
            className='h-full'
          />
        </div>
      </div>
    </div>
  );
};
