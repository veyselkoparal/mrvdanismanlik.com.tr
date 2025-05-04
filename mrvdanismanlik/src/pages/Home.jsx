import { FaBuilding, FaHandshake, FaChartLine, FaGlobe, FaFileAlt, FaSeedling, FaIdCard, FaTrademark, FaUniversity, FaArrowRight } from 'react-icons/fa';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const services = [
    {
      id: 'kosgeb',
      icon: <FaBuilding />,
      title: 'KOSGEB Hibe ve Teşvik Danışmanlığı',
      description: 'KOBİ\'lere yönelik KOSGEB destek programları için başvuru ve süreç yönetimi.'
    },
    {
      id: 'sgk',
      icon: <FaHandshake />,
      title: 'SGK Teşvikleri Danışmanlığı',
      description: 'SGK teşviklerinin tespit ve uygulaması konusunda profesyonel destek.'
    },
    {
      id: 'iskur',
      icon: <FaIdCard />,
      title: 'İŞKUR Destekleri',
      description: 'İŞKUR destekleri ve teşvik başvuruları için danışmanlık hizmetleri.'
    },
    {
      id: 'ihracat',
      icon: <FaGlobe />,
      title: 'İhracat Destek Programları',
      description: 'İhracata yönelik devlet destekleri ve teşviklerinin uygulanması.'
    },
    {
      id: 'ab-projeleri',
      icon: <FaFileAlt />,
      title: 'AB Projeleri Danışmanlığı',
      description: 'Avrupa Birliği hibe programları ve proje yönetimi konusunda danışmanlık.'
    },
    {
      id: 'yatirim-tesviki',
      icon: <FaChartLine />,
      title: 'Yatırım Teşvik Belgesi',
      description: 'Yatırım teşvik belgesi başvuru süreçleri ve takibi için danışmanlık.'
    }
  ];

  const additionalServices = [
    {
      id: 'tarimsal',
      icon: <FaSeedling />,
      title: 'Tarımsal Hibe Danışmanlığı'
    },
    {
      id: 'patent',
      icon: <FaTrademark />,
      title: 'Marka Patent Tescil'
    },
    {
      id: 'kalkinma',
      icon: <FaUniversity />,
      title: 'Kalkınma Ajansı Destekleri'
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Uzman Danışmanlık Hizmetlerimiz</h2>
            <p className="section-subtitle">İşletmenizin ihtiyaçlarına özel finansal destek ve teşvik çözümleri sunuyoruz</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="additional-services">
            <p className="additional-services-text">Ayrıca şunlarda da uzmanız:</p>
            <div className="additional-services-items">
              {additionalServices.map((service) => (
                <Link to={`/hizmetlerimiz#${service.id}`} key={service.id} className="additional-service-item">
                  <span className="additional-service-icon">{service.icon}</span>
                  <span className="additional-service-title">{service.title}</span>
                </Link>
              ))}
            </div>
            <div className="services-action">
              <Link to="/hizmetlerimiz" className="btn btn-primary services-btn">
                Tüm Hizmetlerimizi Keşfedin <FaArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">MRV Mali Danışmanlık Hakkında</h2>
              <p>
                MRV Mali Danışmanlık olarak işletmelerin finansal yönetim ve teşvik mekanizmalarından
                en etkili şekilde faydalanabilmelerini sağlıyoruz. Uzman ekibimizle girişimcilere ve 
                işletmelere değer katıyor, sürdürülebilir büyüme hedeflerine ulaşmalarında yanlarında oluyoruz.
              </p>
              <p>
                İşletmenizin ihtiyaçlarına özel çözümler sunarak, devlet destekleri ve teşviklerden
                maksimum düzeyde yararlanmanızı sağlıyoruz. Profesyonel deneyimimiz ve uzmanlığımızla, 
                rekabet gücünüzü artırıyor ve finansal kaynaklara erişiminizi kolaylaştırıyoruz.
              </p>
              <div className="about-actions">
                <Link to="/hakkimizda" className="btn btn-primary">Hakkımızda</Link>
              </div>
            </div>
            <div className="about-image">
              <img src="/src/assets/images/about-image.jpg" alt="MRV Mali Danışmanlık" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Başarılı Proje</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Mutlu Müşteri</p>
            </div>
            <div className="stat-item">
              <h3>50M+</h3>
              <p>Alınan Destek</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Yıllık Tecrübe</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Finansal fırsatları değerlendirmek için adım atın</h2>
            <p>İşletmenize özel destek ve teşvik danışmanlığı için hemen iletişime geçin</p>
            <Link to="/iletisim" className="btn btn-cta">
              Ücretsiz Danışmanlık Talebi Oluşturun <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 