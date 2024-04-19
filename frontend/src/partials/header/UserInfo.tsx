import { AnimatePresence, motion } from "framer-motion";
import { LayoutDashboard, LogOut, LucideIcon, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pb } from "src/utils";

function UserInfo() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        pb.authStore.clear();
        navigate('/auth/login');
    }

    return (
        <li className="relative">
            <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
            >
                <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                />
            </button>
            <AnimatePresence>
                {isProfileMenuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute origin-top-right right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                        aria-label="submenu"
                    >

                        <SubmenuLink href="/dashboard/profile" text="Profile" Icon={User} />

                        <SubmenuLink
                            href="/dashboard"
                            text="Dashboard"
                            Icon={LayoutDashboard}
                        />
                        <button
                            className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                            onClick={logout}
                        >
                            <LogOut className="w-4 h-4 mr-3" />
                            <span>Logout</span>
                        </button>
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
}

export default UserInfo;

const SubmenuLink = ({
    href,
    text,
    Icon,
}: {
    href: string;
    text: string;
    Icon: LucideIcon;
}) => {
    return (
        <li className="flex">
            <Link
                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                to={href}
            >
                <Icon className="w-4 h-4 mr-3" />
                <span>{text}</span>
            </Link>
        </li>
    );
};
