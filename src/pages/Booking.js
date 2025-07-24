import { useState, useEffect } from "react";

export default function BookTurf() {
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

  const existingBookings = ["6:00 AM - 7:00 AM", "6:00 PM - 7:00 PM"]; // already taken slots

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
    setFeedback(" Your booking is confirmed!");

    // reset fields
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
      <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-green-700 text-center">Reserve Your Turf</h1>

          {/* Booking Section */}
          <div className="bg-gray-50 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Choose Game & Slot</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Select Game</label>
                <select
                    className="w-full p-2 border rounded"
                    value={gameType}
                    onChange={(e) => setGameType(e.target.value)}
                >
                  <option value="">-- Choose --</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Pick a Time</label>
                <select
                    className="w-full p-2 border rounded"
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

              <div>
                <label className="block font-medium mb-1">Estimated Price</label>
                <input
                    type="text"
                    value={calculatedPrice ? `₹ ${calculatedPrice}` : ""}
                    readOnly
                    className="w-full p-2 border bg-gray-100 rounded"
                />
              </div>

              <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded">
                <p>💡 Book before 9 AM to receive a 20% discount!</p>
              </div>
            </div>

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

          {/* Free Slots Display */}
          <div className="bg-white shadow border p-6 rounded">
            <h2 className="text-lg font-bold text-gray-700 mb-4">🕒 Available Time Slots</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {openSlots.length === 0 ? (
                  <li>No open slots today.</li>
              ) : (
                  openSlots.map((slot, index) => <li key={index}>{slot}</li>)
              )}
            </ul>
          </div>

          {/* Booking History */}
          <div className="bg-white shadow border p-6 rounded">
            <h2 className="text-lg font-bold text-gray-700 mb-4">📘 Your Past Bookings</h2>
            {bookedSlots.length === 0 ? (
                <p className="text-gray-500">You haven’t booked any turf yet.</p>
            ) : (
                <table className="w-full border text-sm text-gray-700">
                  <thead className="bg-gray-100">
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