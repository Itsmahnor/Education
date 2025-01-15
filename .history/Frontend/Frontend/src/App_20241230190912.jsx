import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
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
    </div>
  );

  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
    { path: "/findProgram", element: <FindProgram />, errorElement: <ErrorPage /> },

    // Dynamic route for course details
    {
      path: "/course:courseId", 
      element: <MainContent courses={coursesData} />, 
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
