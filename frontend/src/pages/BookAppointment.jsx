import { useState } from "react";
import Footer from "../components/Footer";

function BookAppointment() {

  const [appointmentData, setAppointmentData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: ""
  });

  function handleChange(e) {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointmentData)
    });

    const data = await response.json();

    if (data.success) {
      alert("Appointment booked successfully!");

      setAppointmentData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: ""
      });
    } else {
  alert(data.error || "Something went wrong. Please try again.");
}

  } catch (error) {
    console.log("Error booking appointment:", error);
    alert("Backend is not running or connection failed.");
  }
}

  return (
    <div className="booking-page">

      <h1 className="booking-heading">
        Book Appointment
      </h1>

      <p className="booking-subtitle">
        Schedule your appointment quickly and easily.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>

        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={appointmentData.name}
          onChange={handleChange}
        />

        <label>Phone Number</label>

        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={appointmentData.phone}
          onChange={handleChange}
        />

        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={appointmentData.email}
          onChange={handleChange}
        />

        <label>Select Service</label>

        <select
          name="service"
          value={appointmentData.service}
          onChange={handleChange}
        >
          <option value="">Choose Service</option>

          <option>General Consultation</option>

          <option>Dental Checkup</option>

          <option>Career Counseling</option>

          <option>Physiotherapy</option>

        </select>

        <label>Select Date</label>

        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleChange}
        />

        <label>Select Time</label>

        <input
          type="time"
          name="time"
          value={appointmentData.time}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          Book Appointment
        </button>

      </form>

      <Footer />

    </div>
  );
}

export default BookAppointment;