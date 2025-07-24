import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMsg("Both fields are required.");
            return;
        }

        // Get registered user from localStorage
        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
        ) {
            setMsg("");

            // Optional: set a "logged in" flag
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("currentUser", JSON.stringify(storedUser));

            navigate("/booking"); // Navigate after login
        } else {
            setMsg("Invalid email or password.");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Log In</h1>

                {msg && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 mb-4 rounded">
                        {msg}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
