import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleAdmin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMsg("All fields are required.");
      return;
    }

    // Replace this with actual admin credentials or API check
    if (email === "admin@turf.com" && password === "admin123") {
      setMsg("");
      navigate("/userdetails"); // Redirect to admin dashboard
    } else {
      setMsg("Invalid admin credentials.");
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Admin Login</h1>

          {msg && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 mb-4 rounded">
                {msg}
              </div>
          )}

          <form onSubmit={handleAdmin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-green-800 mb-1">Admin Email</label>
              <input
                  type="email"
                  className="w-full p-2 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="admin@turf.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-800 mb-1">Password</label>
              <input
                  type="password"
                  className="w-full p-2 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              Login as Admin
            </button>
          </form>
        </div>
      </div>
  );
}
