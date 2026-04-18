import "../../App.css"
import image from "/favicon.svg"
import image2 from "/favicon.svg" // Replace with another image path if needed
import { useState, useRef, useEffect } from "react"
import { BellRing, ShoppingCart, EllipsisVertical, UserPen, Settings, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const navigation = useNavigate();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav className="flex justify-center items-center bg-purple-500 rounded-b-2xl" ref={menuRef}>
            <div className="px-10 h-16 flex justify-between w-11/12">
                <div className="flex">
                    <div className=" flex justify-center items-center px-4">
                        <img src={image} alt="" />

                    </div>
                    <ul className="hidden lg:flex items-center">
                        <li className="text-md font-semibold cursor-pointer hover:bg-purple-700 p-2 rounded-full  text-center">Jobs</li>
                        <li className="text-md font-semibold cursor-pointer hover:bg-purple-700 p-2 rounded-full text-center">Learn</li>
                        <li className="text-md font-semibold cursor-pointer hover:bg-purple-700 p-2 rounded-full  text-center">Prep Learn</li>
                        <li className="text-md font-semibold cursor-pointer hover:bg-purple-700 p-2 rounded-full text-center">Career Advice</li>
                        <li className="text-md font-semibold cursor-pointer hover:bg-purple-700 p-2 rounded-full  text-center">Career Solutions</li>
                    </ul>
                </div>
                {/* second side */}
                <div className="flex justify-center items-center">
                    {/* ring bell */}
                    <div className=" flex justify-center items-center px-4">
                        <BellRing />
                    </div>
                    {/* cart */}
                    <div className=" flex justify-center items-center px-4">
                        <ShoppingCart />
                    </div>
                    {/* Profile */}
                    <div className="bg-red-400 flex justify-center items-center px-4 rounded-full h-full">
                        <img src={image2} alt="" />
                        <p className="text-md font-semibold cursor-pointer">Hi Rahil Shaikh</p>
                        <EllipsisVertical onClick={() => setShowMenu((prev) => !prev)} />
                        {showMenu && (
                            <div className="absolute top-16 right-24 w-40 bg-white shadow-lg rounded-xl p-2">
                                <div className="flex flex-col gap-2">

                                    {/* Profile */}
                                    <button
                                        onClick={() => navigation("/profile")}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <UserPen size={18} />
                                        <span>Profile</span>
                                    </button>

                                    {/* Settings */}
                                    <button
                                        onClick={() => navigation("/setting")}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <Settings size={18} />
                                        <span>Settings</span>
                                    </button>

                                    {/* Logout */}
                                    <button
                                        onClick={() => console.log("logout")}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-red-500"
                                    >
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                    </button>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar