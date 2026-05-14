import { useEffect, useState } from "react";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  async function fetchAppointments() {
    try {
      const response = await fetch("http://localhost:5000/api/appointments");
      const data = await response.json();

      if (data.success) {
        setAppointments(data.data);
      }
    } catch (error) {
      console.log("Error fetching appointments:", error);
    }
  }

  async function fetchContacts() {
    try {
      const response = await fetch("http://localhost:5000/api/contact");
      const data = await response.json();

      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  }

  async function deleteAppointment(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/appointments/${id}`,
        {
          method: "DELETE"
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Appointment deleted successfully");
        fetchAppointments();
      } else {
        alert(data.error || "Failed to delete appointment");
      }
    } catch (error) {
      console.log("Error deleting appointment:", error);
    }
  }

  async function updateAppointmentStatus(id, status) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/appointments/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ status })
        }
      );

      const data = await response.json();

      if (data.success) {
        fetchAppointments();
      } else {
        alert(data.error || "Failed to update status");
      }
    } catch (error) {
      console.log("Error updating status:", error);
    }
  }

  async function deleteContact(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE"
      });

      const data = await response.json();

      if (data.success) {
        alert("Lead deleted successfully");
        fetchContacts();
      } else {
        alert(data.error || "Failed to delete lead");
      }
    } catch (error) {
      console.log("Error deleting lead:", error);
    }
  }

  useEffect(() => {
    fetchAppointments();
    fetchContacts();
  }, []);

  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>ClinicFlow</h2>

        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li>Leads</li>
          <li>Customers</li>
          <li>Analytics</li>
        </ul>

      </aside>

      <main className="dashboard-content">

        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Total Appointments</h3>
            <p>{appointments.length}</p>
          </div>

          <div className="dashboard-card">
            <h3>New Leads</h3>
            <p>{contacts.length}</p>
          </div>

          <div className="dashboard-card">
            <h3>Follow-Ups</h3>
            <p>
              {
                appointments.filter(
                  (appointment) => appointment.status === "Pending"
                ).length
              }
            </p>
          </div>

        </div>

        <div className="recent-section">

          <h2>Recent Appointments</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.appointment_date}</td>

                  <td>
                    <select
                      value={appointment.status || "Pending"}
                      onChange={(e) =>
                        updateAppointmentStatus(
                          appointment.id,
                          e.target.value
                        )
                      }
                    >
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="danger-btn"
                      onClick={() => deleteAppointment(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className="recent-section">

          <h2>Recent Leads</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="danger-btn"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;