import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EventManagement from "./pages/EventManagement";
import BrandingandAdvertising from "./pages/BrandingandAdvertising";
import CorporateGifting from "./pages/CorporateGifting";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    <div className="w-full overflow-x-hidden">
      {/* Used react router for route handling */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/branding&advertising" element={<BrandingandAdvertising />} />
          <Route path="/corporate-gifting" element={<CorporateGifting />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
