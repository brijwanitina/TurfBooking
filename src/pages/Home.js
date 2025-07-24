import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-green-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to TurfEase</h1>
        <p className="text-lg mb-6">
          Book your favorite turf in seconds. Simple, fast, and reliable.
        </p>
        <Link to="/booking">
          <button className="bg-white text-green-700 px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
            Book a Slot
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why TurfEase?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white shadow p-6 rounded">
            <h3 className="font-bold text-lg mb-2">📅 Easy Slot Booking</h3>
            <p>Check live slot availability and book instantly online.</p>
          </div>
          <div className="bg-white shadow p-6 rounded">
            <h3 className="font-bold text-lg mb-2">💳 Secure Payments</h3>
            <p>Pay securely and receive instant booking confirmation.</p>
          </div>
          <div className="bg-white shadow p-6 rounded">
            <h3 className="font-bold text-lg mb-2">📱 Mobile Friendly</h3>
            <p>Optimized for all devices so you can book on the go.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Ready to play?</h2>
        <p className="mb-4">Sign up or log in to book your first turf slot now.</p>
        <Link to="/login">
          <button className="bg-white text-green-800 px-6 py-2 font-semibold rounded hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
