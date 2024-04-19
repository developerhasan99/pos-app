import { SubmitHandler, useForm } from "react-hook-form";
import PasswordInput from "src/components/hookForm/PasswordInput";
import TextInput from "src/components/hookForm/TextInput";

import { Link, useNavigate } from "react-router-dom";
import { pb } from "src/utils";
import OAuthRegistration from "./OAuthRegistration";

type Inputs = {
    name: string;
    email: string;
    password: string;
}

const validateEmail = (value: string) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !regex.test(value)) {
        return 'Please enter a valid email address';
    }
    return true;
};

const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            // Register the user to Pocketbase Collection
            await pb.collection('users').create({
                name: data.name,
                email: data.email,
                password: data.password,
                passwordConfirm: data.password,
            })

            navigate('/dashboard');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextInput
                    register={register("name", { required: "Name is required!" })}
                    error={errors.name?.message}
                    label="Enter your Full Name"
                    placeholder="Mehedi Hasan"
                />

                <TextInput
                    register={register("email", { required: "Email is required!", validate: validateEmail })}
                    error={errors.email?.message}
                    label="Enter your Email"
                    placeholder="user@example.com"
                />
                <PasswordInput
                    register={register('password', {
                        required: "Password is required!", minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters!"
                        }
                    })}
                    error={errors.password?.message}
                    label="Enter your Password"
                    placeholder="********"
                />

                <button type="submit" className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    Register
                </button>
            </form>

            <hr className="my-8 border-gray-300 dark:border-gray-600" />

            <OAuthRegistration />

            <p className="mt-4">
                <Link className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/auth/login">
                    Already have an account? Login
                </Link>
            </p>
        </div>
    );
};

export default Register;

