import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cars from "../data/cars";

function VehicleDetails() {
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const vehicle = useMemo(() => cars.find((car) => car.id === Number(id)), [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-12 text-center shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">Vehicle not found</h1>
          <p className="mt-3 text-slate-600">The selected vehicle is not available right now.</p>
          <Link to="/" className="mt-6 inline-block rounded-3xl bg-blue-600 px-6 py-3 text-white">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <img src={vehicle.image} alt={vehicle.name} className="h-96 w-full rounded-2xl object-cover" />
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Vehicle Overview</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">{vehicle.name}</h1>
            <p className="mt-3 text-slate-600">{vehicle.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Brand</p>
                <p className="mt-1 font-semibold text-slate-900">{vehicle.brand}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Fuel</p>
                <p className="mt-1 font-semibold text-slate-900">{vehicle.fuel}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Transmission</p>
                <p className="mt-1 font-semibold text-slate-900">{vehicle.transmission}</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {vehicle.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Book this car</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{vehicle.price}</h2>
          <p className="mt-2 text-slate-600">Fill the form and our team will contact you shortly.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Your Name" required />
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email Address" type="email" required />
            <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Phone Number" required />
            <textarea className="min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Tell us about your interest" required />
            <button type="submit" className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
              Send Inquiry
            </button>
          </form>

          {submitted && (
            <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              Your inquiry has been submitted successfully.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
