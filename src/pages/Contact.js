import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add backend/EmailJS integration here
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4 text-gray-800">
            <div className="max-w-4xl mx-auto shadow-xl bg-white p-8 rounded-xl">
                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-green-700">Contact BookMyTurf</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        We’d love to hear from you — whether it’s feedback, help, or just a hello!
                    </p>
                </div>

                {/* Form & Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    ) : (
                        <div className="text-center p-6 bg-green-50 border border-green-300 rounded">
                            <h2 className="text-xl font-bold text-green-700 mb-2">✅ Message Sent!</h2>
                            <p>We’ll get back to you shortly. Thank you!</p>
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold mb-4 text-green-600"> Contact Details</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>
                                <strong>Email:</strong> <a href="mailto:support@BookMyTurf.app" className="text-green-600">support@BookMyTurf.app</a>
                            </li>
                            <li>
                                <strong>Phone:</strong> +91 98765 43210
                            </li>
                            <li>
                                <strong>Instagram:</strong>{" "}
                                <a
                                    href="https://instagram.com/BookMyTurf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-green-600"
                                >
                                    @BookMyTurf
                                </a>
                            </li>
                            <li>
                                <strong>Location:</strong> Mumbai, India
                            </li>
                        </ul>

                        <div className="mt-6">
                            <iframe
                                title="BookMyTurf Location"
                                className="w-full h-48 rounded border"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.776030967187!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8ae1f76f6b3%3A0x870a5cb9a1d4f5e5!2sMumbai!5e0!3m2!1sen!2sin!4v1600000000000"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
