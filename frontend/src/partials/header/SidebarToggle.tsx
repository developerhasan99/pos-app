import { Menu } from "lucide-react";

function SidebarToggle() {
    return (
        <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
        >
            <Menu />
        </button>
    );
}

export default SidebarToggle;
