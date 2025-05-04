import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">MRV Mali Danışmanlık</h3>
              <p>Girişimcilerden KOBİ'lere, büyük ölçekli işletmelerden yatırımcılara kadar geniş bir yelpazede profesyonel danışmanlık hizmetleri sunuyoruz.</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Hızlı Bağlantılar</h3>
              <ul className="footer-links">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Hizmetlerimiz</h3>
              <ul className="footer-links">
                <li><Link to="/hizmetlerimiz#kosgeb">KOSGEB Danışmanlığı</Link></li>
                <li><Link to="/hizmetlerimiz#sgk">SGK Teşvikleri</Link></li>
                <li><Link to="/hizmetlerimiz#ab-projeleri">AB Projeleri</Link></li>
                <li><Link to="/hizmetlerimiz#yatirim-tesviki">Yatırım Teşvikleri</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">İletişim</h3>
              <ul className="contact-info">
                <li><FaMapMarkerAlt /> <span>Adres Caddesi, No:123, Kat:4, Şişli/İstanbul</span></li>
                <li><FaPhone /> <span>+90 (212) 123 45 67</span></li>
                <li><FaEnvelope /> <span>info@mrvdanismanlik.com.tr</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} MRV Mali Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 