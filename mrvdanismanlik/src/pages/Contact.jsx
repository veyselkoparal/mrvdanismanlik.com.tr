import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>İletişim</h1>
          <p>Sorularınız ve danışmanlık talepleriniz için bizimle iletişime geçin</p>
        </div>
      </div>
      
      <div className="container contact-container">
        <div className="contact-info">
          <h2>İletişim Bilgilerimiz</h2>
          <p className="contact-intro">
            MRV Mali Danışmanlık olarak sorularınızı yanıtlamak, projeleriniz
            hakkında bilgi almak ve danışmanlık hizmetlerimiz hakkında detaylı
            bilgi vermek için sizleri bekliyoruz.
          </p>
          
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Adres</h3>
                <p>Hocaömer Mah, Gölbaşı Cad. No:30 Kat: 1 Daire 2</p>
                <p>Merkez / Adıyaman</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h3>Telefon</h3>
                <p>+90 552 227 73 59</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>E-posta</h3>
                <p>bilgi@mrvdanismanlik.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-text">
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12764.954850804182!2d38.2736388!3d37.76296225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15347d963e6d73a3%3A0xc23286bd362c5063!2sHoca%20%C3%96mer%2C%20Adiyaman%20Merkez%2FAd%C4%B1yaman!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str" 
          width="100%" 
          height="450" 
          frameBorder="0" 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
          title="MRV Mali Danışmanlık Ofis Konumu"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact; 