import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center  bg-primary text-white p-4">
        <div className="flex items-center space-x-3">
          <i className="bi bi-grid-3x3-gap text-gray-300 text-3xl font-extrabold"></i>
          <span className="text-xl tracking-wider text-white inline font-semibold">Expound Technivo</span>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <i className="bi bi-search text-lg text-gray-600 cursor-pointer bg-white px-2 py-1 rounded-md"></i>
          <span className="text-gray-400">|</span>
          <i className="bi bi-bell text-xl text-gray-300 cursor-pointer"></i>
          <i className="bi bi-calendar-event"></i>
          <i className="bi bi-gear text-xl text-gray-300 cursor-pointer"></i>
          <span className="text-gray-400">|</span>
          <i className="bi bi-person-circle text-xl bg-purple-600 px-2 py-1 rounded-full mr-3 cursor-pointer"></i>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list text-2xl text-white"></i>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}
      >
        <button className="absolute top-4 right-4 space-x-2" onClick={() => setIsOpen(false)}>
            <i className="bi bi-x text-4xl text-gray-800"></i>
        </button>
        <ul className="flex flex-col space-y-4 p-6 mt-8">
          <Link to="/home"  onClick={() => setIsOpen(false)}  className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-pink-500 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-house"></i></span>Home</Link>
          <Link to="/lead" onClick={() => setIsOpen(false)}  className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-primary px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-pin-angle-fill"></i></span>Lead</Link>
          <Link to="/work" onClick={() => setIsOpen(false)}  className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-purple-500 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-briefcase"></i></span>Work</Link>
          <Link to="/company"  onClick={() => setIsOpen(false)} className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-green-500 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-buildings"></i></span>Company</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}  className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-yellow-300 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-person-fill"></i></span>Profile</Link>
          <Link to="/meet"  onClick={() => setIsOpen(false)} className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-red-500 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-shop"></i></span>Meet</Link>
          <Link to="/team"  onClick={() => setIsOpen(false)} className="text-gray-800 cursor-pointer hover:bg-gray-200 p-2 rounded"><span className="bg-orange-400 px-2 py-1 rounded-md text-white mr-2"><i className="bi bi-bounding-box"></i></span>Team</Link>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;