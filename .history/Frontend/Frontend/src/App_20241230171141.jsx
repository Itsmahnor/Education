import React from "react";
import { createBrowserRouter, RouterProvider, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";
import { PHP } from "./Pages/PHP";
import { FullSack } from "./Pages/FullSack";
import { AppDevelop } from "./Pages/AppDevelop";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-950 text-orange-500">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4">We couldn't load the page. Please try again later.</p>
      <Link to="/" className="text-orange-500 underline mt-4">Go back to Home</Link>
    </div>
  );

  const NotFoundPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-950 text-orange-500">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="text-orange-500 underline mt-4">Go back to Home</Link>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/findProgram",
      element: <FindProgram />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/selectPHP Laravel Development",
      element: <PHP />,
    },
    {
      path: "/selectMern Stack Web Development",
      element: <FullSack />,
    },
    {
      path: "/selectApp Development",
      element: <AppDevelop />,
    },
    {
      path: "/PHP Laravel Development",
      element: <PHP />,
    },
    {
      path: "/development/mern-stack",
      element: <FullSack />,
    },
    {
      path: "/App Development",
      element: <AppDevelop />,
    },
    {
      path: "*", // Catch-all for undefined routes
      element: <NotFoundPage />,
    },
  ]);

  const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">My App</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/findProgram" className="nav-link">Find Program</Link>
          </li>
          <li className="nav-item">
            <Link to="/selectPHP Laravel Development" className="nav-link">PHP</Link>
          </li>
          <li className="nav-item">
            <Link to="/selectMern Stack Web Development" className="nav-link">MERN Stack</Link>
          </li>
          <li className="nav-item">
            <Link to="/selectApp Development" className="nav-link">App Development</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      <Navigation />
      <ScrollToTop />
      <RouterProvider router={router} />
    </div>
  );
}
