import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "j2tedjos@uwaterloo.ca",
      link: "mailto:j2tedjos@uwaterloo.ca",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/jethro-tedjo",
      link: "https://linkedin.com/in/jethro-tedjo",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Jethro-Tj",
      link: "https://github.com/Jethro-Tj",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "437-260-9107",
      link: "tel:+14372609107",
    },
  ];

  return (
    <section className="contact">
      <div className={`contact-container ${isVisible ? "visible" : ""}`}>
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Let's discuss opportunities and bring ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question, want to
                discuss a potential project, or just want to say hello, I'd love
                to hear from you.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="availability">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
