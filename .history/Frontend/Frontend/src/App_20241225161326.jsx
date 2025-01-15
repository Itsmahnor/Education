import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './app.css'
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";

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
  ]);

  return <RouterProvider router={router} />;
}
