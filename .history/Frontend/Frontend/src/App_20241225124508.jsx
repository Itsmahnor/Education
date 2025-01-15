import Home from "./Pages/Home";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<> <Home /> </>)
    },
    {
      path:"/about",
      element:(<> <TopNav /> <BottomNav /> <About /> <ScrollToTopButton />  </>)
    },
    {
      path:"/product",
      element:(<> <TopNav /> <BottomNav /> <ProductPage /> <ScrollToTopButton />  </>)
    },
    {
      path:"/farm",
      element:(<> <TopNav /> <BottomNav /> <FarmingPage /> <ScrollToTopButton /> </>)
    },
    {
      path:"/news",
      element:(<> <TopNav /> <BottomNav /> <NewsPage /> <ScrollToTopButton />    </>)
    },
    {
      path:"/contact",
      element:(<> <TopNav /> <BottomNav /> <ContactPage /> <ScrollToTopButton />    </>)
    },
  ]);
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}