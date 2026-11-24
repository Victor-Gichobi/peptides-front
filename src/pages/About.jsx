import {
  FaFlask,
  FaMicroscope,
  FaAward,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span>ABOUT KANGYUAN</span>

          <h1>Advancing Research Through Innovation</h1>

          <p>
            Supporting scientific discovery through peptide
            research products, technical expertise and
            custom synthesis services.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="container py-4">
        <div className="row align-items-center g-5">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
              alt="Scientific laboratory research"
              className="about-image"
            />
          </div>

          <div className="col-md-6">
            <span className="section-label">WHO WE ARE</span>

            <h2>About KangYuan Peptides</h2>

            <p>
              KangYuan Peptides focuses on peptide research
              products and custom synthesis services for
              laboratory research, biotechnology and
              industrial applications.
            </p>

            <p>
              We aim to support researchers and institutions
              through technical information, research-oriented
              solutions and responsive customer support.
            </p>

            <p>
              Our focus is on quality, transparency and
              responsible scientific collaboration.
            </p>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-section py-5">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-6">
              <div className="mission-card">
                <FaFlask />

                <h3>Our Mission</h3>

                <p>
                  To support legitimate scientific research
                  through reliable peptide-related products,
                  technical services and responsible
                  customer engagement.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mission-card">
                <FaMicroscope />

                <h3>Our Vision</h3>

                <p>
                  To contribute to scientific progress by
                  supporting innovation, collaboration and
                  responsible research practices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-4">

        <div className="text-center mb-5">
          <span className="section-label">WHAT GUIDES US</span>

          <h2>Our Core Values</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="value-card">
              <FaAward />

              <h4>Quality</h4>

              <p>
                We value quality standards, accurate
                documentation and transparency.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="value-card">
              <FaUsers />

              <h4>Collaboration</h4>

              <p>
                We believe in building strong relationships
                with researchers and institutions.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="value-card">
              <FaMicroscope />

              <h4>Innovation</h4>

              <p>
                We support scientific curiosity and
                responsible technological development.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;