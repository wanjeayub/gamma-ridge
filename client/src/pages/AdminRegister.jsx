import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Admin's token for authorization

    try {
      const response = await fetch("/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password, idNumber }),
      });

      if (response.ok) {
        navigate("/admin"); // Redirect to admin dashboard
      } else {
        setError("Error registering admin");
      }
    } catch (error) {
      setError("Error registering admin");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleRegister}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Register Admin
          </h2>
          <input
            className="border p-2 mb-4 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border p-2 mb-4 w-full"
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
          <input
            className="border p-2 mb-4 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-blue-500 text-white px-4 py-2 w-full"
            type="submit"
          >
            Register Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
