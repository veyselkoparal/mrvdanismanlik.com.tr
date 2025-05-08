import { FaUsers, FaAward, FaHandshake, FaChartLine } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizin ihtiyaçlarını anlar ve buna özel çözümler geliştiririz.'
    },
    {
      icon: <FaAward />,
      title: 'Uzmanlık',
      description: 'Alanında uzman kadromuzla en güncel bilgi ve yetkinliğe sahibiz.'
    },
    {
      icon: <FaHandshake />,
      title: 'Güvenilirlik',
      description: 'Dürüstlük ve şeffaflık ilkelerimizle güven inşa ederiz.'
    },
    {
      icon: <FaChartLine />,
      title: 'Sonuç Odaklılık',
      description: 'Müşterilerimizin hedeflerine ulaşması için somut sonuçlar üretiriz.'
    }
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Kurucu & Genel Müdür',
      bio: '15 yıllık tecrübesiyle mali danışmanlık alanında uzmanlaşmış, yüzlerce firmaya teşvik ve hibe süreçlerinde destek sağlamıştır.'
    },
    {
      name: 'Seda Aydın',
      position: 'Kıdemli Mali Danışman',
      bio: 'KOSGEB ve İŞKUR destekleri konusunda 10 yılı aşkın tecrübeye sahip, proje yazımı ve değerlendirmesinde uzman.'
    },
    {
      name: 'Mehmet Kaya',
      position: 'AB Projeleri Uzmanı',
      bio: 'Avrupa Birliği Projeleri konusunda uzmanlaşmış, uluslararası proje yönetimi ve hibe programları alanında danışmanlık yapmaktadır.'
    },
    {
      name: 'Zeynep Demir',
      position: 'Teşvik Uzmanı',
      bio: 'Yatırım Teşvik Belgesi süreçleri ve SGK teşvikleri alanında uzmanlaşmış, işletmelere finansal destek sağlama konusunda deneyimli.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>Hakkımızda</h1>
          <p>Firmamız ve değerlerimiz hakkında bilgi alın</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-image">
              <img src="about-image.jpg" alt="MRV Mali Danışmanlık" />
            </div>
            <div className="about-story-content">
              <h2 className="section-title">Hikayemiz</h2>
              <p>
                MRV Mali Danışmanlık, 2025 yılında kurulmuş olup, KOBİ'lerin ve girişimcilerin finansal kaynaklara erişimini
                kolaylaştırmak ve devlet desteklerinden en verimli şekilde faydalanmalarını sağlamak amacıyla hizmet vermektedir.
              </p>
              <p>
                Kurulduğumuz günden bu yana, işletmelerin büyüme süreçlerinde yanlarında olmayı ve rekabet güçlerini artırmayı 
                hedefledik. Uzman kadromuz ve kapsamlı tecrübemizle, müşterilerimize özel çözümler sunarak binlerce işletmeye 
                destek sağladık.
              </p>
              <p>
                Bugün geldiğimiz noktada, Türkiye'nin önde gelen mali danışmanlık şirketlerinden biri olarak, işletmelere teşvik
                ve destek mekanizmaları konusunda uçtan uca danışmanlık hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Değerlerimiz</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <h2 className="section-title">Ekibimiz</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>İşletmenize özel danışmanlık için bize ulaşın</h2>
            <p>MRV Mali Danışmanlık olarak, işletmenizin hedeflerine ulaşmasına yardımcı olmak için buradayız.</p>
            <a href="/iletisim" className="btn btn-primary">İletişime Geçin</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 