import { useParams, Link } from "react-router-dom";

function ServiceDetails() {

  const { serviceName } = useParams();

  const serviceData = {
    general: {
      title: "General Consultation",
      description:
        "Our general consultation service helps patients discuss health concerns, receive professional advice, and schedule further treatment plans."
    },

    dental: {
      title: "Dental Checkup",
      description:
        "We provide dental checkups, cleaning, oral health consultation, cavity diagnosis, and preventive dental care."
    },

    career: {
      title: "Career Counseling",
      description:
        "Career counseling sessions guide students and professionals in choosing suitable career paths, skill development, and higher studies."
    },

    physiotherapy: {
      title: "Physiotherapy",
      description:
        "Our physiotherapy sessions help patients recover from injuries, improve mobility, and manage rehabilitation exercises."
    }
  };

  const service = serviceData[serviceName];

  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#f8f3ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}
      >
        <h1
          style={{
            color: "#5e3b76",
            marginBottom: "20px"
          }}
        >
          {service.title}
        </h1>

        <p
          style={{
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "30px"
          }}
        >
          {service.description}
        </p>

        <Link to="/book" className="primary-btn">
          Book Appointment
        </Link>

      </div>
    </div>
  );
}

export default ServiceDetails;