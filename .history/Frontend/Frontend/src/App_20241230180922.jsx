import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";
import { MainContent } from "./Components/CoursesPage/MainComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import coursesData from './Components/CoursesPage/MainComponent.json'

export default function App() {
  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-950 text-orange-500">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4">We couldn't load the page. Please try again later.</p>
      <Link to="/" className="text-orange-500 underline mt-4">Go back to Home</Link>
    </div>
  );
console.log(coursesData[0].data)
const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
  { path: "/findProgram", element: <FindProgram />, errorElement: <ErrorPage /> },
  
  // Only proceed if coursesData[0].data exists and is an array...
  ...(Array.isArray(coursesData[0]?.data) ? 
    coursesData[0].data.flatMap((category) =>
      category.map((course) => ({
        path: course.route,
        element: <MainContent selectedCourse={course} />,
      }))
    ) : []),

  { path: "*", element: <ErrorPage /> },
]);


  const BottomNav = () => (
    <div className="text-orange-500 px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
      Courses
      <div className="group-hover:flex hidden bg-orange-500 text-black widthof border md:w-auto h-auto absolute top-[90px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col">
        <div className="flex justify-between gap-6">
          {coursesData.map((category) => (
            <div className="flex flex-col gap-3 text-black" key={category.category}>
              <h3 className="text-lg font-semibold text-black">{category.category}</h3>
              <ul className="flex flex-col gap-2 text-black">
                {category.courses.map((course) => (
                  <Link to={course.route} key={course.name}>
                    <li className="flex items-center gap-2 cursor-pointer text-black">
                      <course.icon /> {course.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <BottomNav />
      <RouterProvider router={router} />
    </div>
  );
}
