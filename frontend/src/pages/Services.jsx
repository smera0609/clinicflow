import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="services-page">

      <h1 className="services-heading">
        Our Services
      </h1>

      <div className="services-grid">

        <ServiceCard
          title="General Consultation"
          description="Professional consultation and appointment management."
        >
          <Link to="/services/general" className="primary-btn">
            Learn More
          </Link>
        </ServiceCard>

        <ServiceCard
          title="Dental Checkup"
          description="Book dental appointments and follow-up sessions."
        >
          <Link to="/services/dental" className="primary-btn">
            Learn More
          </Link>
        </ServiceCard>

        <ServiceCard
          title="Career Counseling"
          description="Guidance sessions for students and professionals."
        >
          <Link to="/services/career" className="primary-btn">
            Learn More
          </Link>
        </ServiceCard>

        <ServiceCard
          title="Physiotherapy"
          description="Track sessions and rehabilitation appointments."
        >
          <Link to="/services/physiotherapy" className="primary-btn">
            Learn More
          </Link>
        </ServiceCard>

      </div>

    </div>
  );
}

export default Services;