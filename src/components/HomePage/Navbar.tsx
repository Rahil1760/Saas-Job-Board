import "../../App.css"
import image from "/Gemini.png"
import image2 from "/favicon.svg"
import { useEffect, useState } from "react"
import AlertBox from "@/components/UiComponents/AlertBox"
import {
    BellRing,
    ShoppingCart,
    UserPen,
    Settings,
    LogOut,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

// shadcn components
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useLocation } from "react-router-dom"

const userDataLocalStorage = localStorage.getItem('userData');
const userData = (userDataLocalStorage ? JSON.parse(userDataLocalStorage) : false);
const Navbar = () => {
    const navigation = useNavigate()
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!userData || userData == false) {
            setShowAlert(true);
        }
    }, []);
    return (
        <nav className="flex justify-center items-center border-b bg-background">
            {
                (location.pathname !== "/login" && location.pathname !== "/signup") ?
                    <AlertBox showAlert={showAlert} setShowAlert={setShowAlert} description="You are not logged in. Please login to continue." navigateTo="/login" buttonText="Login" />
                    : null
            }
            <div className="px-10 h-16 flex justify-between w-11/12">

                {/* Left */}
                <div className="flex items-center gap-6">
                    <img src={image} alt="logo" className="w-8 h-8" />

                    <ul className="hidden lg:flex items-center gap-4">
                        {["Jobs", "Learn", "Prep Learn", "Career Advice", "Career Solutions"].map((item) => (
                            <li
                                key={item}
                                className="text-sm font-medium cursor-pointer hover:text-primary transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                    <Button variant="ghost" size="icon">
                        <BellRing className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="w-5 h-5" />
                    </Button>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={image2} />
                                    <AvatarFallback>RS</AvatarFallback>
                                </Avatar>
                                <span className="hidden md:block text-sm font-medium">
                                    Rahil
                                </span>
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem onClick={() => navigation("/profile")}>
                                <UserPen className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => navigation("/setting")}>
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={() => console.log("logout")}
                                className="text-red-500 focus:text-red-500"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </nav>
    )
}

export default Navbar