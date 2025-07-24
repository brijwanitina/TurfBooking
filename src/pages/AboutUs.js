export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-6 text-green-700">About BookMyTurf</h1>

                {/* Intro */}
                <p className="text-lg text-center mb-8">
                    BookMyTurf is a modern platform created to make turf booking simple, smart, and stress-free — for both players and turf owners.
                </p>

                {/* Mission */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">🎯 Our Mission</h2>
                    <p>
                        We aim to simplify turf and ground bookings using technology that empowers players to easily find and book slots, while also helping turf owners manage their operations with zero hassle.
                    </p>
                </section>

                {/* Vision */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">🚀 Why We Built BookMyTurf</h2>
                    <p>
                        Urban sports are booming, but the booking process was stuck in the past — calls, confusion, and double bookings. BookMyTurf fixes this by offering:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Real-time slot availability</li>
                        <li>Secure online booking & payments</li>
                        <li>Easy-to-use dashboard for turf managers</li>
                        <li>Mobile-friendly experience for players on the go</li>
                    </ul>
                </section>

                {/* Team Info */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">👨‍💻 Our Team</h2>
                    <p>
                        We are a group of student developers, designers, and sports enthusiasts who built BookMyTurf during a hackathon. What started as a passion project has now evolved into a full-featured platform that solves a real-world problem.
                    </p>
                </section>

                {/* Closing Note */}
                <section className="text-center mt-10">
                    <p className="text-xl">
                        Whether you're booking your first match or managing multiple turfs — BookMyTurf is here to help. ⚽🏏🏐
                    </p>
                </section>
            </div>
        </div>
    );
}
