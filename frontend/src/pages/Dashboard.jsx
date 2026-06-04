function Dashboard() {
  return (
    <div className="container mt-5">

      <h2>CRM Dashboard</h2>

      <hr />

      <h4>Welcome User</h4>

      <p>
        Login Successful.
      </p>

      <button
        className="btn btn-danger"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;