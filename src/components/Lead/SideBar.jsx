import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function SideBar(){
    const location = useLocation();
    return(
        <>
            <div className="w-[5%] min-h-screen lg:flex flex-col hidden border border-x-2">
                <ul className="flex flex-col justify-center items-center gap-y-4 mt-4 text-2xl">
                <Link to="/home" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/home" ? "bg-pink-500 text-white" : "text-pink-500"
                        }`}
                    >
                        <i className="bi bi-house-door"></i>
                    </span>
                </Link>
                <Link to="/" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/lead" ? "bg-primary text-white" : "text-primary"
                        }`}
                    >
                        <i className="bi bi-pin-angle-fill"></i>
                    </span>
                </Link>
                <Link to="/work" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/work" ? "bg-purple-500 text-white" : "text-purple-500"
                        }`}
                    >
                        <i className="bi bi-briefcase"></i>
                    </span>
                </Link>
                <Link to="/company" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/company" ? "bg-green-500 text-white" : "text-green-500"
                        }`}
                    >
                        <i className="bi bi-buildings"></i>
                    </span>
                </Link>
                <Link to="/profile" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/profile" ? "bg-yellow-300 text-white" : "text-yellow-300"
                        }`}
                    >
                        <i className="bi bi-person-fill"></i>
                    </span>
                </Link>
                <Link to="/team" className="text-gray-800 cursor-pointer  p-2 rounded">
                    <span
                        className={`px-2 py-1 rounded-md mr-2 ${
                            location.pathname === "/team" ? "bg-red-500 text-white" : "text-red-500"
                        }`}
                    >
                        <i className="bi bi-shop"></i>
                    </span>
                </Link>
            </ul>
                </div>
        </>
    )
}

export default SideBar;