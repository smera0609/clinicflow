import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookAppointment from "./pages/BookAppointment";
import AdminDashboard from "./pages/AdminDashboard";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/book" element={<BookAppointment />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
        
        <Route path="/services/:serviceName" element={<ServiceDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;