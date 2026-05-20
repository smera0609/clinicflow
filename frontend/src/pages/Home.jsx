import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-left">

          <p className="hero-tag">
            Smart Appointment & Lead Management
          </p>

          <h1>
            Manage appointments and customer leads efficiently.
          </h1>

          <p className="hero-text">
            ClinicFlow helps clinics and coaching centers organize
            bookings, follow-ups, and customer management in one platform.
          </p>

          <div className="hero-buttons">

            <Link to="/book" className="primary-btn">
              Book Appointment
            </Link>

            <Link to="/services" className="secondary-btn">
              Explore Services
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966480.png"
            alt="Clinic illustration"
            className="hero-image"
          />

        </div>

      </section>

      <section className="features">

        <h2 className="features-heading">
          Why Choose ClinicFlow?
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Easy Appointment Booking</h3>
            <p>Customers can schedule appointments online without manual calls.</p>
          </div>

          <div className="feature-card">
            <h3>Lead Tracking</h3>
            <p>Capture and manage customer inquiries efficiently.</p>
          </div>

          <div className="feature-card">
            <h3>Customer Management</h3>
            <p>Maintain organized records of appointments and follow-ups.</p>
          </div>

          <div className="feature-card">
            <h3>Analytics Dashboard</h3>
            <p>Monitor bookings, leads, and business growth insights.</p>
          </div>

        </div>

      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#f8f3ff] text-center">

        <h2 className="text-4xl font-bold text-[#241333] mb-6">
          Built for Real Business Growth
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          ClinicFlow helps small clinics and coaching centers reduce missed appointments,
          improve follow-ups, and manage customer leads from one simple dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#5e3b76] mb-4">
              Faster Bookings
            </h3>
            <p className="text-gray-600">
              Customers can book appointments online anytime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#5e3b76] mb-4">
              Better Follow-ups
            </h3>
            <p className="text-gray-600">
              Track leads and reduce missed business opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#5e3b76] mb-4">
              Clear Insights
            </h3>
            <p className="text-gray-600">
              View appointment and lead data in a simple admin dashboard.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;