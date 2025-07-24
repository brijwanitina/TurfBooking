export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

                {/* Header Section */}
                <div className="text-center bg-green-700 text-white py-10 px-4 rounded-xl shadow-md">
                    <h1 className="text-4xl font-extrabold mb-3">About BookMyTurf</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        BookMyTurf is a digital platform built to modernize turf booking. Whether you're a player or a turf owner, we help make the process seamless, smart, and fast.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to simplify the process of discovering, booking, and managing turfs. We empower sports lovers to find available grounds quickly and give turf managers the tools to handle bookings easily.
                    </p>
                </div>

                {/* Problem & Features Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">What Makes Us Different</h2>
                    <p className="text-gray-700 mb-4">
                        The traditional turf booking system is broken. We've solved common problems with features like:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Live slot tracking and availability</li>
                        <li>Instant online payments and confirmations</li>
                        <li>User and admin dashboards for booking control</li>
                        <li>Fully responsive mobile experience</li>
                        <li>Notification system to avoid confusion</li>
                    </ul>
                </div>

                {/* Team Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We are a passionate team of students, developers, and athletes who saw a problem and built a real solution. What started as a hackathon idea turned into a growing project helping players and turf managers stay connected.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We want to become the go-to turf booking platform across cities and campuses. Our vision is to create a network of verified turfs, seamless digital access, and zero confusion in managing sports spaces.
                    </p>
                </div>

                {/* Final Call-to-Action */}
                <div className="text-center bg-green-600 text-white py-10 px-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">Let’s Redefine Turf Booking Together</h3>
                    <p className="max-w-2xl mx-auto">
                        Join the thousands who are already using BookMyTurf to simplify how they play, manage, and enjoy sports. We’re just getting started.
                    </p>
                </div>
            </div>
        </div>
    );
}
