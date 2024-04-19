import { Moon, Sun } from "lucide-react";
import useTheme from "../../store/theme";

function ThemeToggle() {
    const theme = useTheme();

    return (
        <li className="flex">
            <button
                onClick={theme.change}
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Toggle color mode"
            >
                <Sun className="w-5 h-5 hidden dark:inline-block" />
                <Moon className="w-5 h-5 dark:hidden" />
            </button>
        </li>
    );
}

export default ThemeToggle;
