import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../public_area/Home.js";
import Login from "../public_area/Login.js";
import Register from "../public_area/Register.js";

export default function Navbar() {
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}