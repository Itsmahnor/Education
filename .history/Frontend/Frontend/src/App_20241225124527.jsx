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
      element:(<>   </>)
    },
    {
      path:"/product",
      element:(<>   </>)
    },
    {
      path:"/farm",
      element:(<> </>)
    },
    {
      path:"/news",
      element:(<>     </>)
    },
    {
      path:"/contact",
      element:(<> </>)
    },
  ]);
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}