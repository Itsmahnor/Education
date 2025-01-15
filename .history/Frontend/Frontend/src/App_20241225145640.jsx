import Home from "./Pages/Home";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";

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
      path:"/findProgram",
      element:(<><FindProgram />   </>)
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