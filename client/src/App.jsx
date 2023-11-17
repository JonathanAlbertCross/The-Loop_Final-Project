import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/homePage";
import EventsPage from "./pages/eventsPage";
import About from "./pages/aboutPage";

import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="simple-spinner">
        {console.log("Loading")}
        <span></span>
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <header
          className={
            isAuthenticated ? "authenticated-header" : "unauthenticated-header"
          }
        >
          <h1>
            <Link to="/">The Loop</Link>
          </h1>
          <nav>
            <ul>
              {isAuthenticated && (
                <li>
                  <Link to="/Events">Events</Link>
                </li>
              )}
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
            <ul>
              <li>
                {isAuthenticated ? (
                  <div className="profile-container">
                    <Profile />
                  </div>
                ) : (
                  <LoginButton />
                )}
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<EventsPage />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
