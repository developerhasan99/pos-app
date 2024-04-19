import SidebarToggle from "./SidebarToggle";
import HeaderSearch from "./HeaderSearch";
import ThemeToggle from "./ThemeToggle";
import Notification from "./Notification";
import UserInfo from "./UserInfo";

function Header() {
    return (
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <SidebarToggle />

                <HeaderSearch />

                <ul className="flex items-center flex-shrink-0 space-x-6">
                    <ThemeToggle />
                    <Notification />
                    <UserInfo />
                </ul>
            </div>
        </header>
    );
}

export default Header;
