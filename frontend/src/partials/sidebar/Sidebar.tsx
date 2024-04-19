import { Banknote, ChevronDown, HandCoins, LayoutDashboard, LucideIcon, Package, PackagePlus, Percent, Settings, ShoppingCart, UserRound, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
    {
        href: "/dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
        submenu: [],
    },
    {
        href: "",
        title: "Sales",
        icon: ShoppingCart,
        submenu: [
            {
                href: "/dashboard/sales-list",
                title: "Sales List",
            },
            {
                href: "/dashboard/returns",
                title: "Returns List",
            }
        ],
    },
    {
        href: "",
        title: "Inventory",
        icon: Package,
        submenu: [
            {
                href: "/dashboard/products",
                title: "Products",
            },
            {
                href: "/dashboard/categories",
                title: "Categories",
            },
            {
                href: "/dashboard/subcategories",
                title: "Subcategories",
            },
            {
                href: "/dashboard/brands",
                title: "Brands",
            },
            {
                href: "/dashboard/unites",
                title: "Units",
            },
            {
                href: "/dashboard/Colors",
                title: "Colors",
            },
            {
                href: "/dashboard/import-export",
                title: "Import/Export",
            },
            {
                href: "/dashboard/adjustments",
                title: "Adjustments",
            },
            {
                href: "/dashboard/coupons",
                title: "Coupons",
            }
        ],
    },
    {
        href: "/dashboard/vat-tax",
        title: "Vat/Tax",
        icon: Percent,
        submenu: [],
    },
    {
        href: "/dashboard/customers",
        title: "Customers",
        icon: UserRound,
        submenu: [],
    },
    {
        href: "/dashboard/expenses",
        title: "Expenses",
        icon: Banknote,
        submenu: [],
    },
    {
        href: "/dashboard/purchases",
        title: "Purchases",
        icon: HandCoins,
        submenu: [],
    },
    {
        href: "/dashboard/suppliers",
        title: "Suppliers",
        icon: PackagePlus,
        submenu: [],
    },
    {
        href: "/dashboard/staffs",
        title: "Staffs",
        icon: Users,
        submenu: [],
    },
    {
        href: "/dashboard/settings",
        title: "Settings",
        icon: Settings,
        submenu: [],
    }
]

function Sidebar() {
    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Logo />
                <ul className="mt-6">
                    {links.map((item, index) => (
                        <li className="relative px-6 py-3" key={index}>
                            {item.submenu.length > 0 ?
                                <LinkWithSubMenu title={item.title} Icon={item.icon} submenu={item.submenu} />
                                : <SingleLink title={item.title} Icon={item.icon} href={item.href} />}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;

type TLinkWithSubMenu = {
    title: string,
    Icon: LucideIcon,
    submenu: { href: string, title: string }[]
}

const LinkWithSubMenu = ({ title, Icon, submenu }: TLinkWithSubMenu) => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick} className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" aria-haspopup="true">
                <span className="inline-flex items-center">
                    <Icon className="w-5 h-5" />
                    <span className="ml-4">{title}</span>
                </span>
                <ChevronDown size={16} />
            </button>

            {show &&
                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900" aria-label="submenu">
                    {submenu?.map((item: { href: string, title: string }, index: number) => (
                        <li key={index} className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                            <Link to={item.href} className="w-full" >{item.title}</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}


type TSingleLink = {
    title: string,
    Icon: LucideIcon,
    href: string
}

const SingleLink = ({ title, Icon, href }: TSingleLink) => {
    return (
        <Link to={href} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <Icon className="w-5 h-5" />
            <span className="ml-4">{title}</span>
        </Link>
    )
}