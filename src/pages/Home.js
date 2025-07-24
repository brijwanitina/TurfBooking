import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
      <div className="min-h-screen bg-green-50 text-gray-800">
        {/* Hero Section */}
        <section
            className="text-center py-24 px-4 bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: "url('/Assets/turf-banner.jpg')" }}
        >
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">Welcome to BookMyTurf</h1>
          <p className="text-lg mb-6" data-aos="fade-up">
            Book your favorite turf in seconds. Simple, fast, and reliable.
          </p>
          <Link to="/booking">
            <button
                className="bg-white text-green-700 px-6 py-2 font-semibold rounded shadow hover:bg-gray-200 transition"
                data-aos="zoom-in"
            >
              Book a Slot
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Why BookMyTurf?</h2>
          <div className="grid gap-10 md:grid-cols-3 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-right">
              <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="Slot Booking" className="w-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2"> Easy Slot Booking</h3>
              <p>Check live availability and book instantly.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Secure Payment" className="w-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
              <p>Pay online safely and get instant confirmation.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-left">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="Mobile Friendly" className="w-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2"> Mobile Friendly</h3>
              <p>Fully responsive design for all devices.</p>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="bg-white py-12 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="flex gap-6 w-max">
              <img
                  src="/Assets/turf1.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf1"
              />
              <img
                  src="/Assets/turf2.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf2"
              />
              <img
                  src="/Assets/turf3.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf3"
              />
              <img
                  src="/Assets/turf1.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf1"
              />
              <img
                  src="/Assets/turf2.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf2"
              />
              <img
                  src="/Assets/turf3.jpg"
                  className="w-80 h-64 object-cover rounded-lg shadow-md flex-shrink-0"
                  alt="turf3"
              />
            </div>
          </div>
        </section>



        {/* Call to Action */}
        <section className="bg-green-700 text-white text-center py-14 mt-10" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-2">Ready to play?</h2>
          <p className="mb-4">Sign up or log in to book your first turf slot now.</p>
          <Link to="/signin">
            <button className="bg-white text-green-800 px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </section>
      </div>
  );
}
