import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/CoursesPage/FULLSTACK/Header.JSX'

export const FullSack = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Header />
    </div>
  )
}
