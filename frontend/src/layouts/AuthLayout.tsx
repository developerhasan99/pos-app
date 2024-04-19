import login_office_dark from "@images/auth/login-office-dark.jpeg";
import login_office from "@images/auth/login-office.jpeg";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { pb } from "src/utils";

const AuthLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in and redirect to Dashboard
        if (pb.authStore.isValid) {
            navigate('/dashboard');
        }
    });

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src={login_office} alt="Office" />
                        <img aria-hidden="true" className="object-cover w-full h-full hidden dark:block" src={login_office_dark} alt="Office" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;