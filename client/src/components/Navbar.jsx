import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const role = localStorage.getItem("role");

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Gammaridge</h1>
        <ul className="flex space-x-4">
          {role === "user" && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {role === "admin" && (
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
          )}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
