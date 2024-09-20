import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoanApplication() {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleApply = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5000/loan/apply-loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount, duration }),
      });

      if (response.ok) {
        navigate("/dashboard");
      } else {
        setError("Error applying for loan");
      }
    } catch (error) {
      setError("Error applying for loan");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleApply}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Apply for Loan
          </h2>
          <input
            className="border p-2 mb-4 w-full"
            type="number"
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="border p-2 mb-4 w-full"
            type="number"
            placeholder="Repayment Duration (months)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-blue-500 text-white px-4 py-2 w-full"
            type="submit"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoanApplication;
