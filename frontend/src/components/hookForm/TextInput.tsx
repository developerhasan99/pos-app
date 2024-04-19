type inputType = { register: object; error?: string, label: string; placeholder: string }

const TextInput = ({ register, error, label, placeholder }: inputType) => {
    return (
        <label className="block text-sm mb-4 relative">
            <span className="text-gray-700 dark:text-gray-400">{label}</span>
            <input {...register} placeholder={placeholder} className="block w-full mt-1 text-sm border rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" />
            {error && <p className="text-sm text-red-700">{error}</p>}
        </label>
    )
}
export default TextInput;