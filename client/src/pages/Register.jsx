import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, idNumber, mobile }),
      });

      if (response.ok) {
        navigate("/");
      } else {
        setError("Error registering user");
      }
    } catch (error) {
      setError("Registration failed");
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
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <input
            className="border p-2 mb-4 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2 mb-4 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="border p-2 mb-4 w-full"
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <input
            className="border p-2 mb-4 w-full"
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-blue-500 text-white px-4 py-2 w-full"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
