import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";

import Candidate from "./pages/candidates/Candidate";
import Recruiter from "./pages/recruiters/Recruiter";
import Contact from "./pages/contact/Contact";
import Job from "./pages/FindJobs/Job";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div>404 Not Found</div> },
  {
    path: "/job",
    element: <Job />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/candidate",
    element: <Candidate />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/recruiters",
    element: <Recruiter />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>404 Not Found</div>,
  },
]);

const App = () => {
  return (
    <div id="root">
      <div className="main">
        <Navbar />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
