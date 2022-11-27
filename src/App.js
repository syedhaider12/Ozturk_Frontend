import React from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Main from "./components/Main";
import Tourism from "./components/tourism";
import Auth from "./components/auth";
import Citizenship from "./components/citizenship";
import Exportdata from "./components/Exportdata";
import Education from "./components/education";
import Investment from "./components/investment";
import ScrollToTop from "./components/scrolTop";
import RealState from "./components/realState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
       <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/tourism" element={<Tourism />} />
          <Route exact path="/immigrtion" element={<Citizenship />} />
          <Route exact path="/realstate" element={<RealState />} />
          <Route exact path="/investment" element={<Investment />} />
          <Route exact path="/import" element={<Exportdata />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/dashboard" element={<Auth><Dashboard/></Auth>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
