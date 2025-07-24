import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    for (let key in form) {
      if (!form[key]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate user registration by storing in localStorage
    const userData = {
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      email: form.email,
      password: form.password, // ⚠️ Avoid storing passwords like this in real apps
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    console.log("User Registered:", userData);
    setError("");
    navigate("/login");
  };

  return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Create an Account</h1>

          {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 mb-4 rounded">
                {error}
              </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Tina"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Brijwani"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., tinab123"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Re-type password"
                />
              </div>
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Already registered?{" "}
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
  );
}
