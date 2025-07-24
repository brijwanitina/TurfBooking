import { useEffect, useState } from "react";

export default function UserDetails() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const bookings = JSON.parse(localStorage.getItem("turfBookings")) || [];

        // Extract unique users from bookings
        const uniqueUsers = Array.from(
            new Map(
                bookings.map((b) => [
                    b.email,
                    {
                        name: b.name,
                        email: b.email,
                        status: b.userStatus || "pending", // default status
                    },
                ])
            ).values()
        );

        setUsers(uniqueUsers);
    }, []);

    const updateUserStatus = (email, newStatus) => {
        // Update status in users list
        const updatedUsers = users.map((u) =>
            u.email === email ? { ...u, status: newStatus } : u
        );
        setUsers(updatedUsers);

        // Also update related bookings to reflect user status
        const bookings = JSON.parse(localStorage.getItem("turfBookings")) || [];
        const updatedBookings = bookings.map((b) =>
            b.email === email ? { ...b, userStatus: newStatus } : b
        );

        localStorage.setItem("turfBookings", JSON.stringify(updatedBookings));
    };

    const handleDeleteUser = (email) => {
        const updatedUsers = users.filter((u) => u.email !== email);
        setUsers(updatedUsers);

        const updatedBookings = JSON.parse(localStorage.getItem("turfBookings") || "[]").filter(
            (b) => b.email !== email
        );
        localStorage.setItem("turfBookings", JSON.stringify(updatedBookings));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-blue-700">Admin – User Management</h1>

            {users.length === 0 ? (
                <p className="text-gray-600">No users found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow rounded border">
                        <thead className="bg-blue-100">
                        <tr>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((u) => (
                            <tr key={u.email} className="text-center border-t">
                                <td className="p-3 border">{u.name}</td>
                                <td className="p-3 border">{u.email}</td>
                                <td className="p-3 border">{u.status}</td>
                                <td className="p-3 border space-x-2">
                                    <button
                                        onClick={() => updateUserStatus(u.email, "accepted")}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => updateUserStatus(u.email, "rejected")}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => updateUserStatus(u.email, "blocked")}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Block
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(u.email)}
                                        className="bg-black text-white px-3 py-1 rounded hover:bg-gray-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}