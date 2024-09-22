import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loans, setLoans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoans = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/loan/loans", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setLoans(data.data);
      }
    };
    fetchLoans();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Loans</h1>
      <button
        onClick={() => navigate("/apply-loan")}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        Apply for Loan
      </button>
      {loans.length === 0 ? (
        <p>No loans available</p>
      ) : (
        <ul>
          {loans.map((loan) => (
            <li key={loan._id} className="border-b p-2">
              Amount: Ksh {loan.amount}, Status: {loan.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
