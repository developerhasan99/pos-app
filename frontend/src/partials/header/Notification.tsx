import { AnimatePresence, motion } from "framer-motion";
import { Bell } from "lucide-react";
import { useState } from "react";

function Notification() {
    const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] =
        useState(false);

    return (
        <li className="relative">
            <button
                onClick={() =>
                    setIsNotificationsPanelOpen(!isNotificationsPanelOpen)
                }
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Notifications"
                aria-haspopup="true"
            >
                <Bell className="w-5 h-5" />
                <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
            </button>

            <AnimatePresence>
                {isNotificationsPanelOpen && (
                    <motion.ul
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute origin-top-right right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                    >
                        <NotificationItem title="Message" count={30} />
                        <NotificationItem title="Sales" count={20} />
                        <NotificationItem title="Alerts" count={0} />
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
}

export default Notification;

const NotificationItem = ({
    title,
    count,
}: {
    title: string;
    count: number;
}) => {
    return (
        <li className="flex">
            <a
                className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                href="#"
            >
                <span>{title}</span>
                {count > 0 && (
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                        {count}
                    </span>
                )}
            </a>
        </li>
    );
};
