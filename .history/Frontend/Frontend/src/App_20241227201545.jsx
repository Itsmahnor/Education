import Home from "./Pages/Home";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";
import { PHP } from "./Pages/PHP";
import { FullSack } from "./Pages/FullSack";
import { AppDevelop } from "./Pages/AppDevelop";



export default function App() {
  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-950 text-orange-500">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4">We couldn't load the page. Please try again later.</p>
    </div>
  );
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<> <Home /> </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/register",
      element:(<> <Register />  </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/selectPHP Laravel Development/register",
      element:(<> <Register />  </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/selectMern Stack Web Development/register",
      element:(<> <Register />  </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/selectPHP Laravel Development/findProgram",
      element:(<> <Register />  </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/findProgram",
      element:(<><FindProgram />   </>),
      errorElement: <ErrorPage />, 
    },
    {
      path:"/register/findProgram",
      element:(<><FindProgram /> </>)
    },
    {
      path:"/findProgram/register",
      element:(<> <Register />    </>)
    },
    {
      path:"/selectPHP Laravel Development",
      element:(<> <PHP /> </>)
    },
    {
      path:"/selectMern Stack Web Development",
      element:(<>  <FullSack /> </>)
    },
    {
      path:"/selectApp Development",
      element:(<><AppDevelop /> </>)
    },
    {
      path:"findProgram/selectPHP Laravel Development",
      element:(<> <PHP /> </>)
    },
    {
      path:"findProgram/selectMern Stack Web Development",
      element:(<>  <FullSack /> </>)
    },
    {
      path:"findProgram/selectApp Development",
      element:(<><AppDevelop /> </>)
    },
  ]);
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}