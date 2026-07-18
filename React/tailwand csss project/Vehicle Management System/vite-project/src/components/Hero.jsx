import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:gap-12 lg:items-center">
        <div className="text-center lg:text-left">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
            Drive your future
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find your dream
            <span className="text-sky-400"> vehicle</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            Buy, sell, and manage vehicles with a modern platform built for smarter car shopping and effortless listing management.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/"
              className="rounded-xl bg-sky-500 px-7 py-3 text-center font-semibold text-white shadow-lg transition hover:bg-sky-400"
            >
              Explore Cars
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-200 px-7 py-3 text-center font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/40 via-purple-500/15 to-transparent blur-3xl"></div>
            <img src={heroImage} alt="Vehicle management hero" className="relative w-full rounded-[2rem] object-cover shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero