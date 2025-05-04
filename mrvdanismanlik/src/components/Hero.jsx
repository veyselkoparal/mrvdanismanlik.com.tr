import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const highlights = [
    'Uzman Kadro',
    'Hızlı Hizmet',
    'Yüksek Başarı Oranı'
  ];

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Profesyonel Mali Danışmanlık Hizmetleri</h1>
        <p className="hero-subtitle">
          Girişimcilerden KOBİ'lere, büyük ölçekli işletmelerden yatırımcılara kadar geniş bir yelpazede profesyonel danışmanlık hizmetleri sunuyoruz.
        </p>
        
        <div className="hero-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="hero-highlight-item">
              <FaCheckCircle className="highlight-icon" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        
        <div className="hero-buttons">
          <Link to="/hizmetlerimiz" className="btn btn-primary hero-btn" style={{ marginTop: '0px' }}>
            Hizmetlerimizi Keşfedin <FaArrowRight className="btn-icon" />
          </Link>
          <Link to="/iletisim" className="btn btn-outline hero-btn">
            İletişime Geçin
          </Link>
        </div>
      </div>
      
      <div className="hero-shape-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 