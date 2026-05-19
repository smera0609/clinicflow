function ServiceCard({ title, description, children }) {
  return (
    <div className="service-card">

      <h3>{title}</h3>

      <p>{description}</p>

      {children}

    </div>
  );
}

export default ServiceCard;