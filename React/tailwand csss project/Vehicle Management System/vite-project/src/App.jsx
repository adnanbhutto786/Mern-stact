import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VehicleDetails from "./pages/VehicleDetails";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("carhub_logged_in") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("carhub_logged_in", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("carhub_logged_in");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;