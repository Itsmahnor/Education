import React from 'react'
import { Header } from '../Components/BecomeTutor/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import BecomeInstructorSection from '../Components/BecomeTutor/Content'

export const BecomeTutor = () => {
  return (
   <>
   <TopNav />
   <BottomNav />
   <Header />
   <BecomeInstructorSection />

   </>
  )
}
