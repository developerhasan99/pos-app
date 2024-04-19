import { Navigate, Outlet } from "react-router-dom";
import { pb } from "src/utils";
import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";

function DashboardLayout() {

    return (pb.authStore.isValid ?
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <main className="h-full overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>

        : <Navigate to="/auth/login" replace />
    );
}

export default DashboardLayout;
