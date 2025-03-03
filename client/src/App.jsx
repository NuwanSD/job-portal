import React from "react";
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <div id="root">
        <div className="main">
          <Navbar />
          <Routes />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
