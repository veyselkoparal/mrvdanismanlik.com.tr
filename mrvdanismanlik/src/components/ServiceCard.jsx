import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ icon, title, description, id }) => {
  return (
    <div className="service-card" id={id}>
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <Link to={`/hizmetlerimiz#${id}`} className="service-link">
        Detaylı Bilgi
      </Link>
    </div>
  );
};

export default ServiceCard; 