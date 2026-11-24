import { useState } from "react";
import { FaFlask, FaMicroscope, FaDna } from "react-icons/fa";

function Services() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    peptideSequence: "",
    quantity: "",
    application: "",
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

    console.log("Synthesis enquiry:", formData);

    setSubmitted(true);
  }

  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <span>CUSTOM SYNTHESIS</span>
          <h1>Precision Peptide Synthesis</h1>
          <p>
            Specialized peptide synthesis enquiry services
            for laboratory research and biotechnology.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2>Our Capabilities</h2>
          <p>Explore our research and technical service capabilities.</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card">
              <FaFlask />
              <h4>Custom Synthesis</h4>
              <p>
                Submit your requirements for a custom
                peptide synthesis quotation.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaMicroscope />
              <h4>Analytical Services</h4>
              <p>
                Enquire about analytical characterization
                and technical documentation.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <FaDna />
              <h4>Research Support</h4>
              <p>
                Discuss technical requirements for
                legitimate laboratory research projects.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Enquiry Form */}
      <section className="container py-5">
        <div className="enquiry-container">

          <div className="enquiry-heading">
            <h2>Request a Synthesis Quotation</h2>
            <p>
              Provide your project details and our team can
              review your enquiry.
            </p>
          </div>

          {submitted ? (
            <div className="alert alert-success">
              Your enquiry has been captured successfully.
              This is currently a demonstration form; it has
              not been sent to a server.
            </div>
          ) : (

            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Organization / Institution</label>
                  <input
                    type="text"
                    name="organization"
                    className="form-control"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Research Application</label>
                  <select
                    name="application"
                    className="form-select"
                    value={formData.application}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select application</option>
                    <option value="Academic Research">Academic Research</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Industrial Research">Industrial Research</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Project Reference</label>
                  <input
                    type="text"
                    name="peptideSequence"
                    className="form-control"
                    value={formData.peptideSequence}
                    onChange={handleChange}
                    placeholder="Enter project reference"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Requested Quantity / Scale</label>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Specify requested scale"
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Additional Project Information</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your technical requirements..."
                  ></textarea>
                </div>

              </div>

              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}

export default Services;