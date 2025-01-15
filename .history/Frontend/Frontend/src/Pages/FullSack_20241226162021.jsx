import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/CoursesPage/PHPPAGE/Header'
import { MainContent } from '../Components/CoursesPage/FULLSTACK/MainContent'


export const FullSack = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
     <Header />
     <MainContent />
    </div>
  )
}
