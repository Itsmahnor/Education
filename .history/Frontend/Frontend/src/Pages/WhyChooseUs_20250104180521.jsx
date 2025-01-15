import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/ChooseUS/Header'
import WhyChoose from '../Components/ChooseUS/Content'
import { ICONS } from '../Components/ChooseUS/Icons'
import Opportunities from '../Components/ChooseUS/slider'
import Footer from '../Components/Footer/Footer'

export const WhyChooseUs = () => {
  return (
    <>
    <TopNav />
    <BottomNav />
    <Header />
  <WhyChoose />

<Opportunities />
<Footer />
    </>
  )
}
