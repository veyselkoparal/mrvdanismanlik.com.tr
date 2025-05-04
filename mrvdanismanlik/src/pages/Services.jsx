import { FaBuilding, FaHandshake, FaChartLine, FaGlobe, FaFileAlt, FaSeedling, FaIdCard, FaTrademark, FaUniversity } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 'kosgeb',
      icon: <FaBuilding className="service-detail-icon" />,
      title: 'KOSGEB Hibe ve Teşvik Danışmanlığı',
      description: 'KOBİ\'lere yönelik KOSGEB desteklerinin tespiti, başvuru ve süreç yönetimi hizmetleri sunuyoruz.',
      details: [
        'İşletme Geliştirme Destek Programı',
        'Ar-Ge ve İnovasyon Destek Programı',
        'KOBİGEL - KOBİ Gelişim Destek Programı',
        'Girişimcilik Destek Programı',
        'İleri Girişimci Destek Programı',
        'Stratejik Ürün Destek Programı',
        'Teknolojik Ürün Tanıtım ve Pazarlama Destek Programı'
      ]
    },
    {
      id: 'sgk',
      icon: <FaHandshake className="service-detail-icon" />,
      title: 'SGK Teşvikleri Danışmanlığı',
      description: 'İşveren olarak faydalanabileceğiniz SGK teşviklerinin tespiti ve uygulanması konusunda destek hizmetlerimiz.',
      details: [
        '5510 Sayılı Kanun Kapsamında SGK Teşvikleri',
        '4447 Sayılı Kanun Kapsamında İşsizlik Sigortası Primi İşveren Payı Teşvikleri',
        'Genç, Kadın ve Mesleki Belge Sahibi Çalışanlar İçin Teşvikler',
        'İlave İstihdam Teşvikleri',
        'Bölgesel Teşvikler',
        'Teşvik Takip ve Danışmanlık Hizmetleri'
      ]
    },
    {
      id: 'iskur',
      icon: <FaIdCard className="service-detail-icon" />,
      title: 'İŞKUR Teşvik ve Destek Programları',
      description: 'İŞKUR tarafından sunulan teşvik ve desteklerden faydalanmak için gerekli danışmanlık hizmetleri sunuyoruz.',
      details: [
        'İşbaşı Eğitim Programları',
        'Mesleki Eğitim Kursları',
        'İstihdam Teşvikleri',
        'Engelli ve Eski Hükümlü Destekleri',
        'İş Danışmanlığı ve Yönlendirme',
        'Ücret Garanti Fonu'
      ]
    },
    {
      id: 'ihracat',
      icon: <FaGlobe className="service-detail-icon" />,
      title: 'İhracata Yönelik Devlet Destekleri',
      description: 'İhracatçı firmaların faydalanabileceği devlet destek ve teşviklerine yönelik kapsamlı danışmanlık.',
      details: [
        'Yurt Dışı Fuar Katılım Destekleri',
        'Pazar Araştırması Desteği',
        'Uluslararası Rekabetçiliğin Geliştirilmesi Desteği (UR-GE)',
        'Pazara Giriş Belgeleri Desteği',
        'Marka ve TURQUALITY® Destekleri',
        'Yurt Dışı Birim, Marka ve Tanıtım Faaliyetlerinin Desteklenmesi'
      ]
    },
    {
      id: 'ab-projeleri',
      icon: <FaFileAlt className="service-detail-icon" />,
      title: 'Avrupa Birliği Hibe ve Proje Danışmanlığı',
      description: 'AB tarafından sunulan hibe programları için proje geliştirme, başvuru ve yönetim hizmetleri.',
      details: [
        'Horizon Europe (Ufuk Avrupa) Programı',
        'COSME (İşletmelerin ve KOBİ\'lerin Rekabet Edebilirliği) Programı',
        'Erasmus+ Programı',
        'IPA (Katılım Öncesi Mali Yardım Aracı) Fonları',
        'Proje Döngüsü Yönetimi',
        'Proje Ortaklıkları Geliştirme'
      ]
    },
    {
      id: 'yatirim-tesviki',
      icon: <FaChartLine className="service-detail-icon" />,
      title: 'Yatırım Teşvik Belgesi Başvuru ve Süreç Yönetimi',
      description: 'Yatırımlarınız için teşvik belgesi başvuru süreçlerinin yönetimi ve takibi.',
      details: [
        'Teşvik Belgesi Başvuru Hazırlığı',
        'Fizibilite Raporu Hazırlama',
        'KDV İstisnası',
        'Gümrük Vergisi Muafiyeti',
        'Vergi İndirimi',
        'Sigorta Primi İşveren Hissesi Desteği',
        'Faiz Desteği ve Yatırım Yeri Tahsisi'
      ]
    },
    {
      id: 'tarimsal',
      icon: <FaSeedling className="service-detail-icon" />,
      title: 'Tarımsal Hibe ve Teşvik Danışmanlığı',
      description: 'Tarım ve hayvancılık sektörüne yönelik hibe ve desteklerden faydalanmaya yönelik danışmanlık.',
      details: [
        'Kırsal Kalkınma Yatırımlarını Destekleme Programı (KKYDP)',
        'Genç Çiftçi Projesi',
        'IPARD (Katılım Öncesi Yardım Aracı Kırsal Kalkınma Bileşeni)',
        'Tarım ve Kırsal Kalkınmayı Destekleme Kurumu (TKDK) Destekleri',
        'Tarımsal Mekanizasyon Destekleri',
        'Hayvancılık Yatırımları Destekleri'
      ]
    },
    {
      id: 'calisma-izni',
      icon: <FaIdCard className="service-detail-icon" />,
      title: 'Yabancı Uyruklu Personel Çalışma İzni Başvuruları',
      description: 'Yabancı personel çalıştırmak isteyen şirketler için çalışma izni başvuru süreçleri yönetimi.',
      details: [
        'Çalışma İzni Ön İzin Süreci',
        'Çalışma İzni Başvurularının Hazırlanması',
        'Uzun Dönem İkamet İzinleri',
        'Uzatma Başvuruları',
        'Özel Statülü Yabancılar İçin İstihdam İzinleri',
        'Aile Üyeleri İçin Oturum İzinleri'
      ]
    },
    {
      id: 'patent',
      icon: <FaTrademark className="service-detail-icon" />,
      title: 'Marka, Patent ve Faydalı Model Tescil Danışmanlığı',
      description: 'Fikri mülkiyet haklarının korunması için tescil süreçlerinde profesyonel danışmanlık.',
      details: [
        'Marka Tescil Başvuruları',
        'Patent Başvuru ve Takip Süreci',
        'Faydalı Model Tescil İşlemleri',
        'Tasarım Tescil Hizmetleri',
        'Coğrafi İşaret Tescil Hizmetleri',
        'İtiraz ve Karşı Görüş Hazırlama'
      ]
    },
    {
      id: 'kalkinma',
      icon: <FaUniversity className="service-detail-icon" />,
      title: 'Kalkınma Ajansları Destek Programları',
      description: 'Bölgesel kalkınma ajanslarının sağladığı desteklere yönelik danışmanlık hizmetleri.',
      details: [
        'Proje Teklif Çağrıları',
        'Mali Destek Programları',
        'Teknik Destek Programları',
        'Fizibilite Desteği',
        'Güdümlü Proje Desteği',
        'Faiz Desteği ve Faizsiz Kredi Desteği'
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <div className="container">
          <h1>Hizmetlerimiz</h1>
          <p>İşletmenizin büyümesi ve rekabet gücünün artması için ihtiyaç duyduğu tüm finansal destek ve teşvik mekanizmalarına erişim sağlıyoruz.</p>
        </div>
      </div>
      
      <div className="container">
        <div className="services-container">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="service-detail">
              <div className="service-detail-header">
                {service.icon}
                <h2>{service.title}</h2>
              </div>
              <p className="service-detail-description">{service.description}</p>
              
              <div className="service-detail-content">
                <h3>Sunduğumuz Hizmetler</h3>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 