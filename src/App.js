import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/layout/Exports.js";
import { Home, Login, Register, RegisterInstitution, RegisterDriver, RegisterStudent } from "./components/public_area/Exports.js";
import { Driver, Student, School, ProtectedRoutes }  from "./components/logged_area/Exports.js";
import BabyMeLeva from "./components/audio/soundtrack.mp3";

export default function App() {
  return (
    <div className="d-flex flex-column justify-content-between h-100 p-0 text-white">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/driver" element={<RegisterDriver />} />
            <Route path="/register/student" element={<RegisterStudent />} />
            <Route path="/register/institution" element={<RegisterInstitution />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/student" element={<Student />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/school" element={<School />} />
            </Route>
          </Routes>
      </main>
      <Footer />
      <audio>
        <source src={BabyMeLeva} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
