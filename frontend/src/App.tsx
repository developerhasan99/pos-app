import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/auth/login/Login";
import LostPassword from "./pages/auth/lost-password/LostPassword";
import Register from "./pages/auth/register/Register";
import Overview from "./pages/dashboard/Overview";
import Profile from "./pages/dashboard/Profile";
import useTheme from "./store/theme";

function App() {
    const theme = useTheme();

    return (
        <div className={theme.isDark ? "dark" : "light"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />

                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="" element={<Overview />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="lost-password" element={<LostPassword />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
