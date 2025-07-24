import { useState, useEffect } from "react";

export default function Booking() {
  const [gameType, setGameType] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [feedback, setFeedback] = useState("");

  const availableTimes = [
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  const existingBookings = ["6:00 AM - 7:00 AM", "6:00 PM - 7:00 PM"];

  const pricingMap = {
    football: 800,
    cricket: 1000,
    other: 600,
  };

  const morningDiscount = 0.2;

  useEffect(() => {
    if (gameType && selectedSlot) {
      let baseRate = pricingMap[gameType];
      if (selectedSlot.includes("AM")) {
        baseRate -= baseRate * morningDiscount;
      }
      setCalculatedPrice(baseRate);
    }
  }, [gameType, selectedSlot]);

  const handleBooking = () => {
    if (!gameType || !selectedSlot) {
      setFeedback("Please fill in all fields before booking.");
      return;
    }

    const isAlreadyBooked =
        existingBookings.includes(selectedSlot) ||
        bookedSlots.some((b) => b.slot === selectedSlot);

    if (isAlreadyBooked) {
      setFeedback("Sorry, that time slot is already reserved.");
      return;
    }

    const newEntry = { game: gameType, slot: selectedSlot, price: calculatedPrice };
    setBookedSlots((prev) => [...prev, newEntry]);
    setFeedback("Your booking is confirmed!");

    setGameType("");
    setSelectedSlot("");
    setCalculatedPrice(0);
  };

  const openSlots = availableTimes.filter(
      (time) =>
          !existingBookings.includes(time) &&
          !bookedSlots.some((booking) => booking.slot === time)
  );

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Title */}
          <h1 className="text-4xl font-bold text-green-700 text-center">Book a Turf</h1>

          {/* Booking Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-700">
              Choose Game & Time Slot
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Game Selector */}
              <div>
                <label className="block font-medium mb-2">Game Type</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={gameType}
                    onChange={(e) => setGameType(e.target.value)}
                >
                  <option value="">-- Choose --</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Slot Selector */}
              <div>
                <label className="block font-medium mb-2">Available Time Slots</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <option value="">-- Select Time --</option>
                  {openSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium mb-2">Price (estimated)</label>
                <input
                    type="text"
                    value={calculatedPrice ? `₹ ${calculatedPrice}` : ""}
                    readOnly
                    className="w-full p-3 bg-gray-100 border rounded"
                />
              </div>

              {/* Offer */}
              <div className="bg-green-100 border border-green-300 p-4 rounded">
                <p className="text-sm text-green-700 font-medium">
                  Book before 9 AM to receive a 20% discount.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
                onClick={handleBooking}
                className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Book Now
            </button>

            {feedback && (
                <p className="mt-4 text-sm font-semibold text-blue-700">{feedback}</p>
            )}
          </div>

          {/* Slots Card */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Available Time Slots
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {openSlots.length === 0 ? (
                  <li>No open slots today.</li>
              ) : (
                  openSlots.map((slot, index) => <li key={index}>{slot}</li>)
              )}
            </ul>
          </div>

          {/* Booked History Card */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Booking History
            </h2>
            {bookedSlots.length === 0 ? (
                <p className="text-gray-500">You haven’t booked any turf yet.</p>
            ) : (
                <table className="w-full text-sm text-gray-700 border">
                  <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="p-2 text-left">Game</th>
                    <th className="p-2 text-left">Slot</th>
                    <th className="p-2 text-left">Amount Paid</th>
                  </tr>
                  </thead>
                  <tbody>
                  {bookedSlots.map((entry, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2 capitalize">{entry.game}</td>
                        <td className="p-2">{entry.slot}</td>
                        <td className="p-2">₹ {entry.price}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            )}
          </div>
        </div>
      </div>
  );
}
