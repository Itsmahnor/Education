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
  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-red-100 text-red-600">
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