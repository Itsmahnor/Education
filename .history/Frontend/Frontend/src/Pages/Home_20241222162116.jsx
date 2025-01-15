import { AboutMe } from "../Components/AboutMe/AboutMe";
import { Courses } from "../Components/Courses/Courses";
import { Hero } from "../Components/Hero/Hero";
import { BottomNav } from "../Components/Navbar/BottomNav";
import { TopNav } from "../Components/Navbar/TopNav";
import { TopCatagories } from "../Components/TopCatagories/TopCatagories";


function Home() {
  return ( 
    <>
    <TopNav />
    <BottomNav />
    <Hero />
    <TopCatagories />
    <AboutMe />
    <Courses />





    </>
   );
}

export default Home;