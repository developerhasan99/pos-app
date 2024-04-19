import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type InputType = {
    register: object;
    error?: string;
    label: string;
    placeholder: string;
}

const PasswordInput = ({ register, error, label, placeholder }: InputType) => {

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleClick = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <label className="block text-sm mb-4">
            <span className="text-gray-700 dark:text-gray-400">{label}</span>
            <div className="relative">
                <input type={passwordVisibility ? "text" : "password"} {...register} className="block w-full mt-1 text-sm border rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder={placeholder} />
                <button type="button" onClick={handleClick} className="absolute bottom-[10px] right-2">
                    {!passwordVisibility ?
                        <Eye size={18} className="text-gray-700" />
                        : <EyeOff size={18} className="text-gray-700" />}
                </button>
            </div>
            {error && <p className="text-sm text-red-700">{error}</p>}
        </label>
    );
};

export default PasswordInput;
