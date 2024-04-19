import { LucideIcon } from "lucide-react";

function Link({
    isActive,
    href,
    text,
    Icon,
}: {
    isActive: boolean;
    href: string;
    text: string;
    Icon: LucideIcon;
}) {
    return (
        <li className="relative px-6 py-3">
            {isActive && (
                <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                ></span>
            )}
            <a
                className={`inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                    isActive ? "dark:text-gray-100" : "dark:text-gray-300"
                }`}
                href={href}
            >
                <Icon height={18} />
                <span className="ml-4">{text}</span>
            </a>
        </li>
    );
}

export default Link;
