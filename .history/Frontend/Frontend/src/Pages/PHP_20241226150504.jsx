import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/CoursesPage/PHPPAGE/Header'
import { MainContent } from '../Components/CoursesPage/PHPPAGE/MainContent'
import Footer from '../Components/Footer/Footer'

export const PHP = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
