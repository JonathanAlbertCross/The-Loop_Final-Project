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
        <h1>The loop</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Events">Events</Link>
            <Link to="/About">About</Link>
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
