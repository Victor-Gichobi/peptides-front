import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Contact enquiry:", formData);

    setSubmitted(true);
  }

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <span>GET IN TOUCH</span>
          <h1>Contact Our Team</h1>
          <p>
            Have a question about our research products or
            synthesis services? We'd be happy to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">
            <div className="contact-info-card">
              <FaEnvelope />
              <h4>Email Us</h4>
              <p>Send us your enquiries through email.</p>
              <span>Contact details to be confirmed</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-info-card">
              <FaPhone />
              <h4>Call Us</h4>
              <p>Speak with our customer support team.</p>
              <span>Phone details to be confirmed</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-info-card">
              <FaClock />
              <h4>Working Hours</h4>
              <p>Our normal business hours.</p>
              <span>Monday – Friday</span>
            </div>
          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-md-5">
              <span className="section-label">CONTACT US</span>

              <h2>Let's Start a Conversation</h2>

              <p>
                Whether you represent a research institution,
                biotechnology company or laboratory, send us
                your questions and project enquiries.
              </p>

              <div className="contact-detail">
                <FaMapMarkerAlt />
                <span>Company location to be confirmed</span>
              </div>

            </div>

            <div className="col-md-7">

              <div className="contact-form-card">

                {submitted ? (
                  <div className="alert alert-success">
                    Your message has been captured successfully.
                    This is a demonstration form and has not yet
                    been sent to the company.
                  </div>
                ) : (

                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>

                  </form>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;