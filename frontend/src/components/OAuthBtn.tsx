const OAuthBtn = ({ icon, label, onClick }: { icon: string; label: string, onClick: () => void }) => {
    return (
        <button onClick={() => onClick()} className="flex items-center justify-center gap-1 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 dark:border-gray-600 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
            <img src={icon} alt="" height={20} width={20} />
            {label}
        </button>
    )
}
export default OAuthBtn;