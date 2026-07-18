import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import cars from "../data/cars";

function Home() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = `${car.name} ${car.brand}`.toLowerCase().includes(search.toLowerCase());
      const matchesBrand = brand === "All" || car.brand === brand;
      return matchesSearch && matchesBrand;
    });
  }, [search, brand]);

  return (
    <>
      <Hero />

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Featured Vehicles
            </span>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Latest cars for every driver
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Discover top models from BMW, Honda, Audi, and more. Compare prices, specs, and book your next ride from one place.
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by car or brand"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 md:max-w-md"
            />
            <select
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="All">All Brands</option>
              <option value="BMW">BMW</option>
              <option value="Honda">Honda</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Toyota">Toyota</option>
              <option value="Tesla">Tesla</option>
            </select>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                image={car.image}
                name={car.name}
                model={car.model}
                price={car.price}
              />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="mt-8 rounded-3xl bg-white p-8 text-center text-slate-600 shadow-lg">
              No vehicles match your search. Try another keyword or brand.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;