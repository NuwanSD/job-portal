import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";

import Candidate from "./pages/candidates/Candidate";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div>404 Not Found</div> },
  {
    path: "/candidate",
    element: <Candidate />,
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
