import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/homePage";
import EventsPage from "./pages/eventsPage";
import About from "./pages/aboutPage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <Link to="/">
            <span className="underline">The Loop</span>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <button>Log in</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Events" element={<EventsPage />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
