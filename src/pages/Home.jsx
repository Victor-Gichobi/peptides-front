import { Link } from "react-router-dom";
import {
  FaFlask,
  FaMicroscope,
  FaCertificate,
  FaArrowRight
} from "react-icons/fa";

function Home() {
  return (
    <>

      {/* HERO SECTION */}

      <section className="hero-section">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="hero-label">
                PRECISION IN PEPTIDE SCIENCE
              </span>

              <h1>
                Advancing Science
                <br />
                Through <span>Precision</span>
              </h1>

              <p>
                Discover premium peptide research products
                and custom synthesis services designed to
                support biotechnology, laboratory research
                and industrial innovation.
              </p>

              <div className="hero-buttons">

                <Link to="/products" className="btn btn-primary btn-lg">
                  Explore Products <FaArrowRight />
                </Link>

                <Link to="/services" className="btn btn-outline-light btn-lg">
                  Custom Synthesis
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCTION */}

      <section className="intro-section">
        <div className="container text-center">

          <span className="section-label">WELCOME TO KANGYUAN</span>

          <h2>
            Innovation Driven by
            <span> Scientific Excellence</span>
          </h2>

          <p>
            KangYuan Peptides is focused on peptide products
            and custom synthesis solutions for qualified
            research, biotechnology and industrial applications.
          </p>

        </div>
      </section>


      {/* SERVICES */}

      <section className="services-section">
        <div className="container">

          <div className="text-center mb-5">

            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2>Our Expertise</h2>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="service-card">

                <FaFlask />

                <h4>Peptide Products</h4>

                <p>
                  Explore our research-oriented product catalogue
                  and technical documentation.
                </p>

                <Link to="/products">
                  Explore Products <FaArrowRight />
                </Link>

              </div>

            </div>


            <div className="col-md-4">

              <div className="service-card">

                <FaMicroscope />

                <h4>Custom Synthesis</h4>

                <p>
                  Discover custom peptide synthesis services
                  and submit project enquiries.
                </p>

                <Link to="/services">
                  Learn More <FaArrowRight />
                </Link>

              </div>

            </div>


            <div className="col-md-4">

              <div className="service-card">

                <FaCertificate />

                <h4>Quality Assurance</h4>

                <p>
                  Explore our quality processes, analytical
                  documentation and product specifications.
                </p>

                <Link to="/about">
                  Learn More <FaArrowRight />
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CALL TO ACTION */}

      <section className="cta-section">

        <div className="container text-center">

          <h2>Have a Research Project in Mind?</h2>

          <p>
            Contact our team to discuss your research
            and custom synthesis enquiries.
          </p>

          <Link to="/contact" className="btn btn-light btn-lg">
            Contact Our Team
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;