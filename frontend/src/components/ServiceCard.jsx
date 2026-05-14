function ServiceCard(props) {
  return (
    <div className="service-card">

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <button className="primary-btn">
        Learn More
      </button>

    </div>
  );
}

export default ServiceCard;