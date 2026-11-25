import {
  FaUser,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

function Dashboard() {
  const enquiries = [
    {
      id: "KY-001",
      subject: "Custom Synthesis Enquiry",
      date: "24 November 2026",
      status: "Under Review",
    },
    {
      id: "KY-002",
      subject: "Laboratory Services",
      date: "22 November 2026",
      status: "Completed",
    },
    {
      id: "KY-003",
      subject: "Research Documentation",
      date: "20 November 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <section className="dashboard-header">
        <div className="container">
          <h2>Customer Dashboard</h2>
          <p>Manage your account and research enquiries.</p>
        </div>
      </section>

      <div className="container py-4">

        {/* Welcome */}
        <div className="dashboard-welcome">
          <div>
            <h3>Welcome Back!</h3>
            <p>Here's an overview of your account activity.</p>
          </div>

          <div className="dashboard-user">
            <FaUser />
            <span>Customer Account</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="dashboard-stat">
              <FaClipboardList />
              <div>
                <h3>3</h3>
                <p>Total Enquiries</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-stat">
              <FaClock />
              <div>
                <h3>2</h3>
                <p>Pending Enquiries</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-stat">
              <FaCheckCircle />
              <div>
                <h3>1</h3>
                <p>Completed Enquiries</p>
              </div>
            </div>
          </div>

        </div>

        {/* Enquiry History */}
        <div className="dashboard-table">

          <div className="dashboard-table-heading">
            <h4>Recent Enquiries</h4>
            <span>Enquiry History</span>
          </div>

          <div className="table-responsive">

            <table className="table align-middle">

              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id}>
                    <td>{enquiry.id}</td>
                    <td>{enquiry.subject}</td>
                    <td>{enquiry.date}</td>
                    <td>
                      <span
                        className={`status-badge ${enquiry.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {enquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* Account Information */}
        <div className="row g-4 mt-2">

          <div className="col-md-6">
            <div className="dashboard-info-card">
              <FaUser />

              <h4>Account Information</h4>

              <p>Manage your personal and organization details.</p>

              <button className="btn btn-outline-primary">
                View Profile
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="dashboard-info-card">
              <FaEnvelope />

              <h4>Need Assistance?</h4>

              <p>Contact our team for help with your enquiries.</p>

              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;