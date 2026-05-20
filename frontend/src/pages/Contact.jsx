import { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must contain exactly 10 digits.");
      return;
    }

    try {
      const response = await fetch(
        "https://clinicflow-s4ob.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Your inquiry has been submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }

    } catch (error) {
      console.log("Error submitting contact form:", error);
      alert("Backend is not running or connection failed.");
    }
  }

  return (
    <div className="contact-page">

      <h1 className="contact-heading">
        Contact Us
      </h1>

      <p className="contact-subtitle">
        Submit your inquiry and our team will follow up with you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <label>Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Phone</label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter 10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
          maxLength="10"
          required
        />

        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>

        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="primary-btn">
          Submit Inquiry
        </button>

      </form>

      <Footer />

    </div>
  );
}

export default Contact;