import { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.'
      });
      return;
    }
    
    // E-posta doğrulama
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen geçerli bir e-posta adresi girin.'
      });
      return;
    }
    
    // Normalde burada form verileri sunucuya gönderilir
    // Şimdilik başarılı olduğunu varsayalım
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.'
    });
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // 5 saniye sonra mesajı temizle
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Bize Ulaşın</h2>
        
        {formStatus.submitted && (
          <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-error'}`}>
            {formStatus.message}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name">Ad Soyad *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ad Soyad"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">E-posta *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta adresiniz"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon numaranız"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Konu</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Mesajınızın konusu"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mesaj *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı yazın..."
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn-primary">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 