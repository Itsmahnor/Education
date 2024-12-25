import Home from "./Pages/Home";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./Pages/Register";

export default function App() {
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<> <Home /> </>)
    },
    {
      path:"/register",
      element:(<> <Register />  </>)
    },
    {
      path:"/",
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