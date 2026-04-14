import "../../App.css"
import { BellRing, ShoppingCart } from "lucide-react"
const Navbar = () => {
    return (
        <nav className="flex justify-center items-center bg-purple-500 rounded-b-2xl">
            <div className="px-10 h-16 flex justify-between w-11/12">
                <div className="flex">
                    <div className="bg-red-900 flex justify-center items-center px-4">
                        <p className="text-md font-semibold cursor-pointer">Logo</p>
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
                        <img src="" alt="" />
                        <p className="text-md font-semibold cursor-pointer">Hi Rahil Shaikh</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar