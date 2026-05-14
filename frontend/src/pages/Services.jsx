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
        />

        <ServiceCard
          title="Dental Checkup"
          description="Book dental appointments and follow-up sessions."
        />

        <ServiceCard
          title="Career Counseling"
          description="Guidance sessions for students and professionals."
        />

        <ServiceCard
          title="Physiotherapy"
          description="Track sessions and rehabilitation appointments."
        />

      </div>

    </div>
  );
}

export default Services;