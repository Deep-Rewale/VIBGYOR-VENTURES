import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Feedback from "./pages/Feedback";
import TermsConditions from "./pages/TermsConditions";
import Help from "./pages/Help";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
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
          <Route path="/categories" element={<Categories />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/help" element={<Help />} />
           <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
