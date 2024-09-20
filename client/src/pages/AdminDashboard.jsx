import { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  const handleLoanDecision = async (loanId, decision) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/admin/loan/${loanId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ decision }),
    });

    if (response.ok) {
      alert(`Loan ${decision === "approved" ? "approved" : "rejected"}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.loans.map((loan) =>
            loan._id === loanId ? { ...loan, status: decision } : loan
          )
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {users.length === 0 ? (
        <p>No registered users</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div key={user._id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{user.email}</h2>
              <h3>ID: {user.idNumber}</h3>
              <div>
                <h3 className="font-semibold">Loans</h3>
                {user.loans.length === 0 ? (
                  <p>No loans</p>
                ) : (
                  <ul>
                    {user.loans.map((loan) => (
                      <li key={loan._id} className="p-2">
                        <span>Amount: ${loan.amount}</span> |
                        <span>Status: {loan.status}</span>
                        {loan.status === "pending" && (
                          <div className="mt-2">
                            <button
                              onClick={() =>
                                handleLoanDecision(loan._id, "approved")
                              }
                              className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                handleLoanDecision(loan._id, "rejected")
                              }
                              className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
