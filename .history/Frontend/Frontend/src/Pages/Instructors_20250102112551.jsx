import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/OurInstructors/Header'
import TutorList from '../Components/OurInstructors/TotorCard'
import { Tutor } from '../Components/Tutot/Tutor'

export const Instructors = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Header />
    <Tutor />
    </div>
  )
}
