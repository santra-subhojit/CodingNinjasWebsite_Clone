// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./global.css";

function LoadingScreen() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-[#ffffff]"
      style={{ color: "#fff" }}
    >

      <img
        src="https://files.codingninjas.in/ninjas-running-24084-1-min-1736334057.gif"
        alt="Loading..."
      />
    </div>
  );
}

function App() {

  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.backgroundColor = "#1c1c1c";


  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 


    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <LoadingScreen />;
  }


  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
