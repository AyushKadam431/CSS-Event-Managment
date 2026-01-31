import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUS from "./Page/AboutUS";
import ContactUs from "./pages/ContactUS";
import Gallery from "./pages/Gallery";
import EventCreation from "./pages/EventCreation";

/* ================= LAYOUT ================= */
function Layout({ children }) {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

/* ================= APP ================= */
export default function App() {
  // 🔥 CREATED EVENTS STATE (GLOBAL)
  const [createdEvents, setCreatedEvents] = useState([]);

  // 🔥 FUNCTION PASSED TO EventCreation
  const handleCreateEvent = (event) => {
    setCreatedEvents((prev) => [event, ...prev]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* ✅ PASS EVENTS TO GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery events={createdEvents} />}
          />

          {/* ✅ PASS FUNCTION TO EVENT CREATION */}
          <Route
            path="/eventcreation"
            element={<EventCreation onCreateEvent={handleCreateEvent} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
