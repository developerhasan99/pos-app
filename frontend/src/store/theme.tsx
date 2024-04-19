import { create } from "zustand";

const darkModeLocalKey = "CURRENT_POS_APPLICATION_THEME_MODE"

interface ThemeState {
    isDark: boolean;
    change: () => void;
}

const initialDarkMode = () => {
    return localStorage.getItem(darkModeLocalKey) ? true : false;
}

const useTheme = create<ThemeState>((set) => ({
    isDark: initialDarkMode(),
    change: () => set(() => {

        const isLocalKey = localStorage.getItem(darkModeLocalKey);
        if (isLocalKey) {
            localStorage.removeItem(darkModeLocalKey);
            return { isDark: false }
        }

        localStorage.setItem(darkModeLocalKey, "Dark mode is enabled!");
        return { isDark: true }
    }),
}));

export default useTheme;
