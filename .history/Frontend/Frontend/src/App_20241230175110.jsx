import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';

import coursesData from './data/courses.json';

export default function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // Simulate data fetch or use fetch/axios for real data
    setCourses(coursesData); // Assuming `coursesData` is already imported
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    ...courses?.data?.map((category) =>
      category.courses.map((course) => ({
        path: course.route,
        element: <MainContent selectedCourse={course} />
      }))
    ),
    { path: "*", element: <ErrorPage /> },
  ]);

  if (!courses) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
}
