import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Events from "./pages/events";
import About from "./pages/about";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>The Loop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
