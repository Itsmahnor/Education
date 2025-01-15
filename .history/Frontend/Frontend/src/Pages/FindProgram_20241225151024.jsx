import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { SearchProgram } from '../ProgramFindPage/SearchProgram/SearchProgram'
import { Header } from '../ProgramFindPage/Header'

export const FindProgram = () => {
  return (
  <>
  <TopNav />
  <BottomNav />
<Header />
  <SearchProgram  />
  </>
  )
}
