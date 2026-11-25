import { useState } from "react";
import {
  FaUsers,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

function Admin() {
  const [enquiries, setEnquiries] = useState([
    {
      id: "KY-001",
      customer: "John Smith",
      subject: "Custom Peptide Synthesis",
      date: "24 November 2026",
      status: "Pending",
    },
    {
      id: "KY-002",
      customer: "Jane Cooper",
      subject: "Laboratory Services",
      date: "22 November 2026",
      status: "Under Review",
    },
    {
      id: "KY-003",
      customer: "Michael Brown",
      subject: "Research Documentation",
      date: "20 November 2026",
      status: "Completed",
    },
  ]);

  const [search, setSearch] = useState("");

  const updateStatus = (id, newStatus) => {
    setEnquiries((previousEnquiries) =>
      previousEnquiries.map((enquiry) =>
        enquiry.id === id
          ? { ...enquiry, status: newStatus }
          : enquiry
      )
    );
  };

  const filteredEnquiries = enquiries.filter((enquiry) =>
    `${enquiry.customer} ${enquiry.subject} ${enquiry.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const pending = enquiries.filter(
    (enquiry) => enquiry.status === "Pending"
  ).length;

  const underReview = enquiries.filter(
    (enquiry) => enquiry.status === "Under Review"
  ).length;

  const completed = enquiries.filter(
    (enquiry) => enquiry.status === "Completed"
  ).length;

  return (
    <div className="admin-page">

      <section className="admin-header">
        <div className="container">
          <h2>Admin Dashboard</h2>
          <p>Manage customer accounts and research enquiries.</p>
        </div>
      </section>

      <div className="container py-5">

        <div className="admin-welcome">
          <div>
            <h3>Welcome, Administrator</h3>
            <p>Here's an overview of your platform.</p>
          </div>

          <span className="admin-label">Administrator</span>
        </div>

        {/* Statistics */}

        <div className="row g-4 mb-5">

          <div className="col-md-3">
            <div className="admin-stat">
              <FaClipboardList />
              <div>
                <h3>{enquiries.length}</h3>
                <p>Total Enquiries</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-stat">
              <FaClock />
              <div>
                <h3>{pending}</h3>
                <p>Pending</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-stat">
              <FaUsers />
              <div>
                <h3>{underReview}</h3>
                <p>Under Review</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-stat">
              <FaCheckCircle />
              <div>
                <h3>{completed}</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Enquiry Management */}

        <div className="admin-table-container">

          <div className="admin-table-heading">
            <div>
              <h4>Research Enquiries</h4>
              <p>Review and update customer enquiries.</p>
            </div>

            <div className="admin-search">
              <FaSearch />

              <input
                type="text"
                placeholder="Search enquiries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="table-responsive">

            <table className="table align-middle">

              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Customer</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Update Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry.id}>

                    <td>{enquiry.id}</td>

                    <td>{enquiry.customer}</td>

                    <td>{enquiry.subject}</td>

                    <td>{enquiry.date}</td>

                    <td>
                      <span
                        className={`admin-status ${enquiry.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {enquiry.status}
                      </span>
                    </td>

                    <td>
                      <select
                        className="form-select"
                        value={enquiry.status}
                        onChange={(e) =>
                          updateStatus(enquiry.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

            {filteredEnquiries.length === 0 && (
              <p className="text-center py-4">
                No enquiries found.
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;