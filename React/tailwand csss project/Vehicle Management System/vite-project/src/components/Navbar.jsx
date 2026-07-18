
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
   return (
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 px-8 py-4">
            <Link to="/" className="text-2xl font-bold text-blue-400">
               CarHub
            </Link>
            <ul className="flex flex-wrap gap-6 text-sm font-medium">
               <li>
                  <Link to="/" className="hover:text-blue-300">Home</Link>
               </li>
               <li>
                  <Link to="/contact" className="hover:text-blue-300">Contact</Link>
               </li>
               {isLoggedIn && (
                 <li>
                    <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
                 </li>
               )}
               <li>
                  {isLoggedIn ? (
                    <button
                      onClick={onLogout}
                      className="hover:text-blue-300 transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login" className="hover:text-blue-300">Login</Link>
                  )}
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar;
