import { Link } from "react-router-dom";

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: "f" },
  { name: "Instagram", url: "https://instagram.com", icon: "i" },
  { name: "Twitter", url: "https://twitter.com", icon: "x" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">CarHub</h3>
          <p className="leading-relaxed text-slate-400">
            A modern vehicle marketplace made for buyers and sellers. Find your dream car with reliable support, transparent pricing, and trusted listings.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="transition hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
          <p className="text-slate-400">adnan2292707@gmail.com</p>
          <p className="mt-2 text-slate-400">+92 316 0243208</p>
          <p className="mt-2 text-slate-400">123 Motorway Ave, Auto City</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 CarHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
