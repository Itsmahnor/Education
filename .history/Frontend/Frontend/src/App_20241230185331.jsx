import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";
import { MainContent } from "./Components/CoursesPage/MainComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import coursesData from './Components/CoursesPage/MainComponent.json';

export default function App() {
  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-950 text-orange-500">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4">We couldn't load the page. Please try again later.</p>
      <Link to="/" className="text-orange-500 underline mt-4">Go back to Home</Link>
    </div>
  );

  // Log to ensure data structure is correct
  console.log(coursesData);

  // Create routes dynamically for each course outline
  const dynamicRoutes = Array.isArray(coursesData) ? 
    coursesData.flatMap((course, courseIndex) => 
      course.data?.outline?.map((month, monthIndex) => ({
        path: `/${course.header.title.toLowerCase().replace(/\s+/g, '-')}/month-${monthIndex + 1}`,
        element: <MainContent 
          selectedCourse={{
            courseHeader: course.header, 
            courseOverview: course.overview, 
            courseDetails: course.details, 
            monthDetails: month 
          }} 
        />,
      }))
    ) : [];

  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
    { path: "/findProgram", element: <FindProgram />, errorElement: <ErrorPage /> },
    ...dynamicRoutes,
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
