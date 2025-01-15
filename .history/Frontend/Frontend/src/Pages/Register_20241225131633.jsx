import React from 'react'
import { Header } from '../RegisterPage/RegisterHeader/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import SignUp from '../RegisterPage/SignUp/SignUp'

export const Register = () => {
  return (
 <>
<TopNav />
<BottomNav />
 <Header />
 <SignUp />
 </>
  
  )
}
